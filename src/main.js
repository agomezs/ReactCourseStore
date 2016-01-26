"use strict";

var React = require('react');
var ReactDOM = require('react-dom');
var Router  = require('react-router').Router;
var routes = require('./routes');
var InitializeActions = require('./actions/initializeActions');

// Gets the initial data.
InitializeActions.initApp();

ReactDOM.render(<Router>{routes}</Router>, document.getElementById('myApp'));
