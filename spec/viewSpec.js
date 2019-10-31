// function createNoteHTML(note, index) {

  Describe("createNoteHTML", function() {
    It ( "wraps note inside HTML element", function() {
      var view = new View;
      var note = {
        title: function() {return 'Hello'}
      }
      console.log(view.createNoteHTML(note, 0))
      Demand(view.createNoteHTML(note, 0).innerHTML).toBe(`<a href="#0">Hello</a>`)
    });
  });

  Describe("createNoteHTML", function() {
  It ( "returns a HTML element", function() {
    var view = new View;
    var note = {
      title: function() {return 'Hello'}
    }
    Demand(view.createNoteHTML(note, 0).tagName).toBe("LI")
  });
});
