"use strict";

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
