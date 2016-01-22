"use strict";

var Dispatcher = require('../dispatcher/appDispatcher');
var ActionTypes = require('../constants/actionTypes');
var EventEmitter = require('events').EventEmitter;
var ObjectAssign = require('object-assign');
var CHANGE_EVENT = 'change';

var AuthorStore = ObjectAssign({}, EventEmitter.prototype, {
  addChangeListener: function (callback) {
    this.on(CHANGE_EVENT, callback);
  },

  removeChangeListener: function (callback) {
    this.removeChangeListener(CHANGE_EVENT, callback);
  },

  emitChange: function () {
    this.emit(CHANGE_EVENT);
  }

});

// Any action will be dispached here.
Dispatcher.register(function(action) {
  switch(action.actionType) {

  }
});

module.exports= AuthorStore;
