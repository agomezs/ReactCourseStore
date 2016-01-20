"use strict";

var React = require('react');

var ReactRouter = require('react-router');
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;
var Redirect = ReactRouter.Redirect;

var routes = (

    <Route path="/" component={require('./components/app')}>
      <IndexRoute component={require('./components/homePage')} />
      <Route path="authors" component={require('./components/authors/authorPage')} />
      <Route path="author" component={require('./components/authors/manageAuthorPage')} />
      <Route path="about" component={require('./components/about/aboutPage')} />

      <Redirect from="aboutus" to="about"/>

      <Route path="*" component={require('./components/notFoundPage')} />
    </Route>

);

module.exports = routes;
