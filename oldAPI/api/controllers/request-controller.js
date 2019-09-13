
'use strict';

const requestService = require('../services/request-service');

exports.list = function (request, response) {
    const resolve = (contacts) => {
        response.status(200);
        response.json(contacts);
    };
    requestService.search({})
        .then(resolve)
        .catch(renderErrorResponse(response));
};


exports.post = function (request, response) {
    const newRequest = Object.assign({}, request.body);
    const resolve = (result) => {
        response.status(200);
        response.json(result);
    };
    requestService.save(newRequest)
        .then(resolve)
        .catch(renderErrorResponse(response));
};

exports.get = function (request, response) {
    const resolve = (result) => {
        response.status(200);
        response.json(result);
    };
    requestService.get(request.params.newRequestId)
        .then(resolve)
        .catch(renderErrorResponse(response));
};

exports.put = function (request, response) {
    const newRequest = Object.assign({}, request.body);
    const resolve = (result) => {
        response.status(200);
        response.json(result);
    };
    // newRequest._id = request.params.newRequestId;
    requestService.update(newRequest)
        .then(resolve)
        .catch(renderErrorResponse(response));
};


exports.delete = function (request, response) {
    const resolve = (result) => {
        response.status(200);
        response.json({
            message: 'request Successfully deleted'
        });
    };
    requestService.delete(request.params.newRequestId)
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