
'use strict';
module.exports = function (app) {
    const servicemanController = require('../controllers/serviceman-controller');
    
    app.route('/serviceman')
        .get(servicemanController.list)
        .post(servicemanController.post);


    app.route('/serviceman/:servicemanId/:userId')
        .get(servicemanController.get)
        .put(servicemanController.put)
        .delete(servicemanController.delete);

};