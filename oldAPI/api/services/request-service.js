

'use strict';
const mongoose = require('mongoose'),
    Request = mongoose.model('requests');

exports.search = function (params) {
    const promise = Request.find(params).exec()
    return promise;
};

exports.save = function (newRequest) {
    const newrequest = new Request(newRequest);
    const promise = newrequest.save();
    return promise;
};

exports.get = function (newRequestId) {
    const promise = Request.findById(newRequestId).exec();
    return promise
};

exports.update = function (newRequest) {
 
    const promise = Request.findOneAndUpdate({_id: newRequest._id}, {$set:{status:newRequest.status} }).exec();
    return promise;
};


exports.delete = function (newRequestId) {
    const promise = Request.remove({_id: newRequestId});
    return promise;
};