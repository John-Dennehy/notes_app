"use strict";

function listenFor(element, action, callBack, callBackParameter) {
  element.addEventListener(action, function() {
  callBack(callBackParameter)
});
}

function elementByID(id) {
  return document.querySelector("#" + id);
}

function elementByClass(className) {
  return document.querySelector("." + className);
}

function elementByTag(tag) {
  return document.querySelector(tag);
}

function getElement(element) {
  return document.querySelector(element);
}

document.addEventListener('DOMContentLoaded', function () {
  console.log( "I'm listening" );

  listenFor(elementByID('create_button'), 'click', alert,'hello world' )

});

