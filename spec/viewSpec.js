// function createNoteHTML(note, index) {

  Describe("createNoteHTML", function() {
    It ( "wraps note inside HTML element", function() {
      var view = new View;
      var note = "Hello"
      // notebook.add(note)
      // console.log(view.refresh(note))
      console.log(view.createNoteHTML(note, 0))
      Demand(view.createNoteHTML(note, 0).innerHTML).toBe("Hello")
    });
  });

  Describe("createNoteHTML", function() {
  It ( "returns a HTML element", function() {
    var view = new View;
    var note = "Hello"
    Demand(view.createNoteHTML(note, 0).tagName).toBe("LI")
  });
});
