"use strict";

var React = require('react');
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

var Home = React.createClass({
  render: function () {
      return (
        <div className="jumbotron">
          <h1>My body</h1>
          <p>Home component build with react :) </p>
          <Link to="about" className="btn btn-primary btn-lg">Let's go to about...</Link>
        </div>
      );
  }
});

module.exports = Home;
