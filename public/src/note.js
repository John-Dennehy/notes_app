"use strict";
(function(exports){

  function Note(text) {
    var content = text;

    return {
      content: function(){
        return content
      },
      title: function() {
        if (content.length > 20){
        return content.slice(0,20) + "...";
        }
        return content
      },
    }

  }

  exports.Note = Note;

})(this);

