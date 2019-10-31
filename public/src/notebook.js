  
"use strict";

(function (exports) {

  function Notebook(noteConstructor) {
    var noteConstructor = noteConstructor || Note
    var notes = [];

    return {
      all: function() {
        return notes;
      },

      add: function(text) {
        var note = new noteConstructor(text)
        console.log(note)
        return notes.push(note);
      },
      
      get: function(index) {
        return notes[index];
      }
    }
  }

  exports.Notebook = Notebook;

})(this);

var notebook = new Notebook;