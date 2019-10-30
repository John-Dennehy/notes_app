"use strict";

var View = (function () {
  // Expose these functions via an interface while hiding
  // the implementation of the module within the function() block
  return {
    refresh: function () {
      clearNoteBox()
    },

    hideForm: function () {
    }
  }

    function clearNoteBox() {
      document.getElementById('note_content').value = ""
    }

    function addToList(note) {
      var list = document.getElementById('populate_notes')
      list.appendChild(createNoteHTML(note));
      clearNoteBox()
    }

    function createNoteHTML(note) {
      var htmlElement = document.createElement('li');
      htmlElement.appendChild(document.createTextNode(note));
      return htmlElement
    }

})();