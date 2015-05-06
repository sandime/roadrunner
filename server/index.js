/**
 * Created by SHERRI on 5/5/15.
 */
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var methodOverride = require('method-override');
var _ = require('lodash');

//create app
var app = express();

//add middleware
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(methodOverride('X-HTTP-Method-Override'));

// CORS Support
app.use(function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});
/*test
app.use('/hello', function (req, res, next){
    res.send('Hellowwwwwww');
    next();
});
end test */

// Connect to MongoDB (localhost or url server)
mongoose.connect('mongodb://localhost/roadrunner');
mongoose.connection.once('open', function() {

  //  Load the models just created in server/models/index.js
    app.models = require('./models/index');

    // Load the routes (each is lodash, iterates over routes, assigns the controller as first value in callback)
    var routes = require('./routes');
    _.each(routes, function(controller, route) {
        app.use(route, controller(app, route));
    });
//end
    console.log('Listening on port 3000...');
    app.listen(3000);
});