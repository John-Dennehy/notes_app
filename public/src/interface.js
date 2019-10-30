"use strict";

(function(exports) {

  function Interface(button, textbox, ) {
    this.button = button
    this.textbox = textbox
    this.listenFor()
  }

  Interface.prototype = {
    listenFor: function(){
      var self = this
      this.button.addEventListener('click', function () {
        self.addNote()
      });
    },

    getNote: function(){
      var text = this.textbox.value;
      return text;
    },

    addNote: function(){
      var note = this.getNote();
      if (!this.isEmpty(note)) {
        notebook.add(note);
        var notes = notebook.all();
        View.refresh(notes);
      }
    },

    isEmpty: function(text){
      if (text.trim() === "" || text === null) {
        return true
      }
    }
  }

  exports.Interface = Interface
})(this)

document.addEventListener('DOMContentLoaded', function () {
  new Interface(document.getElementById('create_button'), document.getElementById('note_content'))
});

  // function getHashValue() {
  //   return location.hash.split("#")[1];
  // }
  
  // function hashChange() {
  //   View.showNote(getHashValue())
  // }
  

