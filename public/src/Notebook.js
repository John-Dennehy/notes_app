"use strict";

(function (exports) {
  // variable is private
  // Expose these functions via an interface while hiding
  // the implementation of the module within the function() block
  function Notebook() {
    this.notes = [];
    
  }
  Notebook.prototype = {
    all: function() {
      return this.notes;
    },
    
    add: function(text) {
      return this.notes.push(text);
    },
    
    get: function(index) {
      return this.notes[index];
    }
  },

  exports.Notebook = Notebook
}) (this);

var notebook = new Notebook
