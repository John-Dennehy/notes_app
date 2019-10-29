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
