// Sample recipes database
// Source: https://en.wikibooks.org/wiki/Cookbook
var express = require('express');
var router = express.Router();
var path = require('path');

var recipes = [
    {
        name: 'Lasagne',
        category: 'Pasta',
        procedure: 'Steps for making lasagne'
    },
    {
        name: 'Pasta bolognese',
        category: 'Pasta',
        procedure: 'Steps for making lasagne'
    },
    {
        name: 'Macaronie',
        category: 'Pasta',
        procedure: 'Steps for making lasagne'
    },
    {
        name: 'pizza hawai',
        category: 'Pizza',
        procedure: [
            'Stop kant en klare pizza in de oven',
            'Haal de pizza eruit'
        ]
    },
    {
        name: 'Calzone 5',
        category: 'Pizza',
        procedure: 'Steps to make calzone (pizza)'
    },
    {
        name: 'Tuna Salad',
        category: 'Salad',
        procedure: [
            'Mix ingredients in a bowl',
            'Chill before serving'
        ]
    },
    {
        name: 'Pancakes',
        category: 'Pancakes',
        procedure: [
            'Mix ingredients in a bowl',
            'Put some of the pancake mix into a baking pan',
            'Flip the pancake arround when the downside of the pancake is brown',
            'Once both sides of the pancake are brown take it out of the pan'
        ]
    }
];
module.exports = recipes;
