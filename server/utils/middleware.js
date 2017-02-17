const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');

module.exports = function(app) {
	'use strict';
	app.use(express.static(path.join(__dirname,'/../../client')))
	app.use(express.static(path.join(__dirname,'/../../bower_components')))
	app.use(bodyParser.json())
	console.log('Middleware initialized');
};
