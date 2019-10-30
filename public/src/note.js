"use strict";

var Note = (function(text) {
  var text = text;
  return {
    text: function() {
      return text;
    }
  }
})();
