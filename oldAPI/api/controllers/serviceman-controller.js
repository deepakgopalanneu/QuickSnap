
'use strict';

const ServicemanService = require('../services/serviceman-service');

exports.list = function (request, response) {
    const resolve = (contacts) => {
        response.status(200);
        response.json(contacts);
    };
    ServicemanService.search({})
        .then(resolve)
        .catch(renderErrorResponse(response));
};


exports.post = function (request, response) {
    const newRequest = Object.assign({}, request.body);
    const resolve = (result) => {
        response.status(200);
        response.json(result);
    };
    ServicemanService.save(newRequest)
        .then(resolve)
        .catch(renderErrorResponse(response));
};

exports.get = function (request, response) {
    const resolve = (result) => {
        response.status(200);
        response.json(result);
    };
    ServicemanService.get(request.params.newRequestId)
        .then(resolve)
        .catch(renderErrorResponse(response));
};

exports.put = function (request, response) {
    const newRequest = Object.assign({}, request.body);
    const resolve = (result) => {
        response.status(200);
        response.json(result);
    };
    newRequest._id = request.params.newRequestId;
    ServicemanService.update(newRequest)
        .then(resolve)
        .catch(renderErrorResponse(response));
};


exports.delete = function (request, response) {
    const resolve = (result) => {
        response.status(200);
        response.json({
            message: 'serviceman Successfully deleted'
        });
    };
    ServicemanService.delete(request.params.newRequestId)
        .then(resolve)
        .catch(renderErrorResponse(response));
};

let renderErrorResponse = (response) => {
    const errorCallback = (error) => {
        if (error) {
            response.status(500);
            response.json({
                message: error.message
            });
        }
    }
    return errorCallback;
};