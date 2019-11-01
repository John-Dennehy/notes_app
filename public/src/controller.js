"use strict";

(function (exports) {

  function Controller(NoteContstructor) {
    var noteContstructor = NoteContstructor || Note

    function listenFor(element, event, callBack) {
      element.addEventListener(event, function (event) {
        if (typeof callBack === "function") { callBack(event) }
      });
    }

    function addNote(event) {
      event.preventDefault()
      var text = event.target[0].value
      if (!isEmpty(text)) { insertNoteIntoNotebook(text) }
    }

    function insertNoteIntoNotebook(text) {
      var note = new noteContstructor(text);
      notebook.add(note);
      sendNoteToView();
    }

    function sendNoteToView() {
      var notes = notebook.all()
      view.addToList(notes)
    }

    function retrieveNote() {
      var index = getNoteIndexFromUrl(window.location)
      var note = notebook.get(index - 1).content()
      view.showNote(note)
    }

    function getNoteIndexFromUrl(location) {
      return location.hash.split('#')[1];
    }

    // function getNote() {
    //   var text = document.getElementById('note_content').value
    //   if (!isEmpty(text)) {
    //     var note = new noteContstructor(text)
    //     return note
    //   }
    // }

    // function addNote() {
    //   var note = getNote()
    //   notebook.add(note)
    //   var notes = notebook.all()
    //   view.refresh(notes)
    // }

    function isEmpty(text) {
      if (text.trim() === "" || text === null) {
        return true
      }
    }
    listenFor(document.getElementById('note-form'), 'submit', addNote);
    listenFor(window, 'hashchange', retrieveNote);

  }

  exports.Controller = Controller;

})(this);
