'use strict';

var React = require('react');
var Link = require('react-router').Link;
var AuthorList = require('./authorList');
var AuthorActions = require('../../actions/authorActions');
var AuthorStore = require('../../stores/authorStore');

var AuthorPage = React.createClass({
  getInitialState: function () {
    return {
      authors: AuthorStore.getAllAuthors()
    };
  },

  componentWillMount: function() {
		AuthorStore.addChangeListener(this._onChange);
	},

	//Clean up when this component is unmounted
	componentWillUnmount: function() {
		AuthorStore.removeChangeListener(this._onChange);
	},

	_onChange: function() {
		this.setState({ authors: AuthorStore.getAllAuthors() });
	},

  // // Not longer needed when using flux
  // componentDidMount: function () {
  //   if(this.isMounted) {
  //     this.setState({
  //       authors: AuthorApi.getAllAuthors()
  //     });
  //   }
  // },

  render: function () {
    return (
      <div>
        <h1>Authors</h1>
        <Link to="author" className="btn btn-default">Add Author</Link>
        <AuthorList authors={this.state.authors} />
      </div>
    );
  }
});

module.exports = AuthorPage;
