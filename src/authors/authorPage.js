'use strict';

var React = require('react');
var AuthorApi = require('../../api/authorApi');

var AuthorPage = React.createClass({
  render: function () {
    return (
      <div>
        <h1>Authors</h1>
      </div>
    );
  }
});

module.exports = AuthorPage;
