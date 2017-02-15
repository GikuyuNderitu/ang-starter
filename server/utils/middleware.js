const path = require('path');
const express = require('express');

module.exports = function(app) {
	'use strict';
	app.use(express.static(path.join(__dirname,'/../../client/static')))
	app.use(express.static(path.join(__dirname,'/../../bower_components')))
	app.set('views', __dirname + '/../../client/views')
	app.set('view engine', 'pug')
	console.log('Middleware initialized');
};
