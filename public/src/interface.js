"use strict";

function listenFor(element, action, callBack, callBackParameter = null) {
  element.addEventListener(action, function () {
    callBack(callBackParameter)
  });
}

document.addEventListener('DOMContentLoaded', function () {
  console.log("I'm listening");
  listenFor(document.getElementById('create_button'), 'click', addToList)
});

function getNote() {
  var text = document.getElementById('note_content').value
  return text
}

function clearNoteBox() {
  document.getElementById('note_content').value = ""
}

function addToList() {
  var note = getNote()
  var list = document.getElementById('populate_notes')
  list.appendChild(createNoteHTML(note));
  clearNoteBox()
}

function createNoteHTML(note) {
  var htmlElement = document.createElement('li');
  htmlElement.appendChild(document.createTextNode(note));
  return htmlElement
}
