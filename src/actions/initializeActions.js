
"use strict";

var Dispatcher = require('../dispatcher/appDispatcher');
var AuthorApi = require('../api/authorApi');
var ActionTypes = require('../constants/actionTypes');

var InitialActions = {
  initApp: function () {
    var action = {
      actionType: ActionTypes.INITIALIZE,
      initData: {
        authors: AuthorApi.getAllAuthors()
      }
    };
    Dispatcher.dispatch(action);
  }
};

module.exports = InitialActions;
