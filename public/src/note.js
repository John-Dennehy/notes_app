"use strict";
(function(exports){

  function Note(text) {
    var content = text;

    return {
      content: function(){
        return content
      },
      title: function() {
        return content.slice(0,20) + "...";
      },   
    }

  }
  // Note.prototype.title = function(){
  //   return this.content.slice(0,20) + "..."
  // }

  exports.Note = Note;

})(this);
