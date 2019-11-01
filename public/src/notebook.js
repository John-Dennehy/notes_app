"use strict";

(function (exports) {
  function Notebook () {
    var notes = []

    return {
      all: function () {
        return notes
      },

      add: function (note) {
        return notes.push(note)
      },

      get: function (index) {
        return notes[index]
      }
    }
  }

  exports.Notebook = Notebook
})(this)

var notebook = new Notebook;

