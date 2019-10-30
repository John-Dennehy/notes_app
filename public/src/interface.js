"use strict";

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
  if !isEmpty(getNote()) {
    Notebook.add(note)
    View.refresh()
  }
}

function isEmpty(text) {
  if (text.trim() === "" || text === null)
}

document.addEventListener('DOMContentLoaded', function () {
  console.log("I'm listening");
  listenFor(document.getElementById('create_button'), 'click', addNote)
});
