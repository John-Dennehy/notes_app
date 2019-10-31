Describe("Note", function() {
  It ( "should contain the comments given to it", function() {
    var note = new Note("Hello")
    Demand(note.content()).toBe("Hello")
  });

  Describe("title", function() {
    It ( "returns a shortened version of the note as a title", function() {
      var note = new Note("Hello, my name is Kevin. I am a software developer. Can't wait to start!")
      Demand(note.title()).toBe("Hello, my name is Ke...")
    });
  });
});
