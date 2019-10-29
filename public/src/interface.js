"use strict";

function listenFor(element, action, callBack, callBackParameter) {
  element.addEventListener(action, function() {
  callBack(callBackParameter)
});
}

document.addEventListener('DOMContentLoaded', function () {
  console.log( "I'm listening" );

  listenFor(document.getElementById('create_button'), 'click', alert,'hello world' )
});

var notes = ["hello", "Bye", "smelly", "cool", "monkeys"]

var list = function listNotes() {
  var list = document.getElementById('populate_notes')
  console.log(notes)
  notes.forEach(function(note){
    var listNote = document.createElement('li');
    listNote.appendChild(document.createTextNode(note));
    list.appendChild(listNote);
  })
}

list()

