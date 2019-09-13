
'use strict';
module.exports = function (app) {
    const requestController = require('../controllers/request-controller');
    
    app.route('/requests')
        .get(requestController.list)
        .post(requestController.post);


    app.route('/requests/:requestId')
        .get(requestController.get)
        .put(requestController.put)
        .delete(requestController.delete);

};