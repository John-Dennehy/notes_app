"use strict";

(function (exports) {
  
  function Controller(NoteContstructor) {
    var noteContstructor = NoteContstructor || Note

    function listenFor(element, event, callBack) {
      element.addEventListener(event, function () {
        if (typeof callBack === "function") { callBack() }
      });
    }

    function getNote() {
      var text = document.getElementById('note_content').value
      return text
    }

    function addNote() {
      var text = getNote()
      if (!isEmpty(text)) { insertNoteIntoNotebook(text) }
    }

    function insertNoteIntoNotebook(text) {
      var note = new noteContstructor(text)
      notebook.add(note)
      sendNoteToView()
    }

    function sendNoteToView() {
      var notes = notebook.all()
      view.refresh(notes)
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
    
    listenFor(document.getElementById('create_button'), 'click', addNote);

  }

  exports.Controller = Controller;

})(this);

  
