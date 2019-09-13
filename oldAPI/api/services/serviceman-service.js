

'use strict';
const mongoose = require('mongoose'),
Serviceman = mongoose.model('serviceman');

exports.search = function (params) {
    const promise = Serviceman.find(params).exec()
    return promise;
};

exports.save = function (newRequest) {
    const newServiceman = new Serviceman(newRequest);
    const promise = newServiceman.save();
    return promise;
};

exports.get = function (newRequestId) {
    const promise = Serviceman.findById(newRequestId).exec();
    return promise
};

exports.update = function (newRequest) {
 
    const promise = Serviceman.findOneAndUpdate({_id: newRequest._id}, {$set:{status:newRequest.status} }).exec();
    return promise;
};


exports.delete = function (newRequestId) {
    const promise = Serviceman.remove({_id: newRequestId});
    return promise;
};