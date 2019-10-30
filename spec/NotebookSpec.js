Describe("Notebook", function(){

  Describe('all', function(){
    It('returns all notes', function() {
      notes2 = Notebook
      notes2.add("Hello")
      Demand("Hello").toBeAVassalOf(notes2.all())
    });
  });

  Describe('add', function(){
    It('creates a new note', function() {
      var notes = Notebook
      notes.add("Hello World");
      Demand("Hello World").toBeAVassalOf(notes.all())
    });
  });
});
