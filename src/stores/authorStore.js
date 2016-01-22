"use strict";

var Dispatcher = require('../dispatcher/appDispatcher');
var ActionTypes = require('../constants/actionTypes');
var EventEmitter = require('events').EventEmitter;
var ObjectAssign = require('object-assign');
var _ = require('lodash');
var CHANGE_EVENT = 'change';

var _authors = [];

var AuthorStore = ObjectAssign({}, EventEmitter.prototype, {
  addChangeListener: function (callback) {
    this.on(CHANGE_EVENT, callback);
  },

  removeChangeListener: function (callback) {
    this.removeChangeListener(CHANGE_EVENT, callback);
  },

  emitChange: function () {
    this.emit(CHANGE_EVENT);
  },

  getAllAuthors: function () {
    return _authors;
  },

  getAuthorById: function (id) {
    return _.find(_authors, {id: id});
  }
});

// Any action will be dispached here.
Dispatcher.register(function(action) {
  switch(action.actionType) {
    case ActionTypes.INITIALIZE:
      _authors = action.initData.authors;
      AuthorStore.emitChange();
      break;
    case ActionTypes.CREATE_AUTHOR:
      _authors.push(action.author);
      AuthorStore.emitChange();
      break;
    default:
      // do nothing
  }
});

module.exports= AuthorStore;
