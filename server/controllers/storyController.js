/**
 * Created by SHERRI on 5/5/15.
 */
    //takes a mongoose model and converts it into a rest API
var restful = require('node-restful');
module.exports = function(app, route) {

    // Setup the controller for REST.
    var rest = restful.model(
        'stories',
        app.models.stories
    ).methods(['get', 'put', 'post', 'delete']);

    // Register this endpoint with the application.
    rest.register(app, route);

    // Return middleware.
    return function(req, res, next) {
        next();
    };
};