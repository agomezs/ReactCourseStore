"use strict";

var Dispatcher = require('../dispatcher/appDispatcher');
var AuthorApi = require('../api/AuthorApi');
var ActionTypes = require('../constants/actionTypes');

var AuthorActions = {
  createAuthor: function (author) {
    var newAuthor = AuthorApi.saveAuthor(author);
    var action = {
      actionType: ActionTypes.CREATE_AUTHOR,
      author: newAuthor
    };
    // Tells all the stores that an author was just created.
    Dispatcher.dispatch(action);
  },

  updateAuthor: function (author) {
    var updatedAuthor = AuthorApi.saveAuthor(author);
    var action = {
      actionType: ActionTypes.UPDATE_AUTHOR,
      author: updatedAuthor
    };

    Dispatcher.dispatch(action);
  }
};

module.exports = AuthorActions;
