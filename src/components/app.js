
/*eslint-disable strict*/

var React = require('react');
var Header = require('./common/header');
$ = jQuery = require('jquery');

var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;

var App = React.createClass({
  render: function () {
    return (
      <div>
        <Header/>
        <div className="container-fluid">
          {this.props.children}
        </div>
      </div>
    );
  }
});

module.exports = App;
