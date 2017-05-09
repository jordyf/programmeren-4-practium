/**
 * Created by Jordy Frijters on 9-5-2017.
 */
/**
 * Created by Jordy Frijters on 7-5-2017.
 */
// API version 1
var express = require('express');
var router = express.Router();
var path = require('path');
var cities = require('./cities.js');
var app = express();
var jsoncities = cities;

router.get('/info', function(request, response) {
    response.status(200);
    response.json({
        "description": "Deze server is bedoeld voor practicum 2 van programmeren"
    });
});



router.get('/cities', function(request, response) {
    response.status(200);

    var category = request.query.cate
    console.log("username= " + category);

    if (category != '') {
        var city = jsoncities.filter(function (u) {
            return (u.category === category);
        })
    }

    else{
        cities = jsoncities;
    }

    console.log(city);
    response.json(city);

});

router.get('/cities/:number', function(request, response) {
    response.status(200);

    var number = request.params.number || '';
    console.log("number= " + number);

    if (number != ''){
        var city = jsoncities[number];
        response.json(city);
    }

    else{
        city = jsoncities;
    }

});

router.get('*', function(request, response) {
    response.status(404);
    response.json({
        "Error": "Page not found"
    });
});

module.exports = router;