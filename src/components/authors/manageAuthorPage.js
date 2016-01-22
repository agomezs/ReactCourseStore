
"use strict";

var React = require('react');
var ReactRouter = require('react-router');
var AuthorForm = require('./authorForm');

var AuthorActions = require('../../actions/authorActions');
var AuthorStore = require('../../stores/authorStore');
var toastr = require('toastr');

var ManageAuthorPage = React.createClass({

  mixins: [
    ReactRouter.History
  ],

  getInitialState: function () {
    return {
      author: {id: '', firstName: '', lastName: ''},
      errors: {},
      dirty: false
    };
  },

  componentWillMount: function () {
    // When someone clicks an author.
    var authorId = this.props.params.id;

    if(authorId) {
      // this.setState({author: AuthorApi.getAuthorById(authorId)});
      this.setState({author: AuthorStore.getAuthorById(authorId)});
    }
  },

  setAuthorState: function (event) {
    this.setState({dirty: true});
    var field = event.target.name;
    var value = event.target.value;
    this.state.author[field] = value;
    return this.setState({author: this.state.author});
  },

  authorFormIsValid: function() {
		var isValid = true;
		this.state.errors = {}; //clear any previous errors.

		if (this.state.author.firstName.length < 3) {
			this.state.errors.firstName = 'First name must be at least 3 characters.';
			isValid = false;
		}

		if (this.state.author.lastName.length < 3) {
			this.state.errors.lastName = 'Last name must be at least 3 characters.';
			isValid = false;
		}

		this.setState({errors: this.state.errors});
		return isValid;
	},

  saveAuthor: function (event) {
    event.preventDefault();

    if(!this.authorFormIsValid()) {
      return;
    }

    // AuthorApi.saveAuthor(this.state.author);
    AuthorActions.createAuthor(this.state.author)

    this.setState({dirty: false});
    toastr.success('Author added...');
    this.history.pushState(null, 'authors');
  },

  render: function () {
    return(
      <AuthorForm
        author={this.state.author}
        onChange={this.setAuthorState}
        onSave={this.saveAuthor}
        errors={this.state.errors}
        />
      );
  }
});

module.exports = ManageAuthorPage;
