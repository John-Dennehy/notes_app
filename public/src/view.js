'use strict';

(function (exports) {
  // Expose these functions via an interface while hiding
  // the implementation of the module within the function() block
  function View () {
    return {
      addToList: addToList,
      createNoteHTML: createNoteHTML,
      showNote: showNote
    }

    function clearNoteBox () {
      document.getElementById('note_content').value = ''
    }

    function addToList (notes) {
      var list = document.getElementById('populate_notes')
      var index = notes.length
      var note = notes[index - 1]
      list.appendChild(createNoteHTML(note, index))
      clearNoteBox()
    }

    function createNoteHTML (note, index) {
      var htmlElement = document.createElement('li')
      htmlElement.setAttribute('id', 'list_note' + index)
      htmlElement.appendChild(titleLink(note, index))
      return htmlElement
    }

    function titleLink (note, index) {
      var htmlElement = document.createElement('a')
      var linkText = document.createTextNode(note.title())
      htmlElement.setAttribute('href', '#' + index)
      htmlElement.appendChild(linkText)
      return htmlElement
    }

    function showNote(note) {
      console.log('inside')
      var htmlElement = document.getElementById('note-paragraph')
      htmlElement.innerHTML = note
    }
  }

  exports.View = View
})(this)

var view = new View()

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
