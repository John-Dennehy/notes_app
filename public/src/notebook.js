"use strict";

var Notebook = (function () {
  // variable is private
  var notes = [];
  // Expose these functions via an interface while hiding
  // the implementation of the module within the function() block
  return {
    all: function() {
      return notes;
    },

    add: function(text) {
      return notes.push([text]);
    },

    get: function(index) {
      return notes[index];
    }
  }
})();
