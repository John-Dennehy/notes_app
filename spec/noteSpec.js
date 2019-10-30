Describe("Note", function() {
  It ( "should contain the comments given to it", function() {
    var note = Note("hello")
    Demand(note.text).toBe("Hello")
  });
});
