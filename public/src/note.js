"use strict";
(function(exports){

  function Note(text) {
    this.content = text;
  }

  Note.prototype.title = function(){
    return this.content.slice(0,20) + "..."
  }

  exports.Note = Note;

})(this);
