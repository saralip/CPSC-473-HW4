var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var redis = require('redis');

//from Chapter7
//var credentials=require("./credentials.json"),

var redisClient = redis.createClient();
var counts={};

mongoose.connect('mongodb://localhost/3000')

var trivia = new mongoose.Schema
({
	question: String,
	answer: String,
	answerId: Number,
});

var triviaDB = mongoose.model('triv', trivia);

//returns a single trivia question

app.get('/question', function(req, res)
{
	console.log('getting question');
});

//creates a new trivia question
app.post('/question', function(req, res)
{
	console.log('creating question');
});
//takes an answerId and possible answer
app.post('/answer', function(req, res)
{
	console.log('Is the answer correct?');
});
//returns current count of right and wrong answers
app.get('/score', function(req, res)
{
	console.log('keeping score');
});
