"use strict";

(function (exports) {

  // Expose these functions via an interface while hiding
  // the implementation of the module within the function() block
  function View() {

    return {
      refresh: function refresh (notes) {
        addToList(notes);
      },
      createNoteHTML: createNoteHTML
    }

    function clearNoteBox() {
      document.getElementById('note_content').value = "";
    }

    function addToList(notes) {
      var list = document.getElementById('populate_notes');
      var index = notes.length;
      var note = notes[index-1];
      list.appendChild(createNoteHTML(note, index));
      clearNoteBox()
    }

    function createNoteHTML(note, index) {
      var htmlElement = document.createElement('li');
      htmlElement.setAttribute('id','list_note'+index);
      htmlElement.appendChild(document.createTextNode(note));
      // console.log(htmlElement)
      return htmlElement;
    }

  }

  exports.View = View;

})(this);

var view = new View;


// var View = function () {

//   // Expose these functions via an interface while hiding
//   // the implementation of the module within the function() block
//   return {
//     refresh: function (notes) {
//       clearNoteBox()
//       addToList(notes)
//     },
//     hideForm: function () {
//     }
//   }

//     function clearNoteBox() {
//       document.getElementById('note_content').value = ""
//     }

//     function addToList(notes) {
//       var list = document.getElementById('populate_notes')
//       var index = notes.length
//       var note = notes[index-1]
//       list.appendChild(createNoteHTML(note, index));
//       clearNoteBox()
//     }

//     function createNoteHTML(note, index) {
//       var htmlElement = document.createElement('li');
//       htmlElement.setAttribute('id','list_note'+index)
//       htmlElement.appendChild(document.createTextNode(note));
//       return htmlElement
//     }

// };

// var view = View();
