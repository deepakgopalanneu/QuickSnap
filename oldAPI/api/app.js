'use strict';
module.exports = function (app) {
 
    let requestModel = require('./models/request');
    let servicemanModel = require('./models/serviceman');

    let requestRoutes = require('./routes/request-route');
    requestRoutes(app);

    let servicemanRoutes = require('./routes/serviceman-routes')
    servicemanRoutes(app);
};