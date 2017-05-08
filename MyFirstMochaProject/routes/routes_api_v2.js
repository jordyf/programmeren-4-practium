/**
 * Created by Jordy Frijters on 7-5-2017.
 */
// API version 2
var express = require('express');
var router = express.Router();
var path = require('path');
var recipes = require('./recipes.js');
var app = express();
var jsonrecipes = recipes;

router.get('/info', function(request, response) {
    response.status(200);
    response.json({
        "description": "Deze server is bedoeld voor practicum 2 van programmeren"
    });
});



router.get('/recipes', function(request, response) {
    response.status(200);

    var category = request.query.category || '';
    console.log("username= " + category);

    if (category != '') {
        var recipe = jsonrecipes.filter(function (u) {
            return (u.category === category);
        })
    }

    else{
        recipe = jsonrecipes;
    }

    console.log(recipe);
    response.json(recipe);

});

router.get('/recipes/:number', function(request, response) {
    response.status(200);

    var number = request.params.number || '';
    console.log("number= " + number);

    if (number != ''){
        var recipe = jsonrecipes[number];
        response.json(recipe);
    }

    else{
        recipe = jsonrecipes;
    }

});

router.get('*', function(request, response) {
    response.status(404);
    response.json({
        "Error": "Page not found"
    });
});

module.exports = router;