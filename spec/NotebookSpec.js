Describe("Notebook", function(){

  Describe('all', function(){
    It('returns all notes', function() {
      notes = new Notebook
      notes.add("Hello")
      Demand("Hello").toBeAVassalOf(notes.all())
    });
  });

  Describe('add', function(){
    It('creates a new note', function() {
      var notes = new Notebook
      notes.add("Hello World");
      
      Demand("Hello World").toBeAVassalOf(notes.all())
    });
  });
  
  Describe('get', function() {
    It('gets the note at a given index', function() {
      var notes = new Notebook
      notes.add("Hello World");

      Demand(notes.get(0)).toBe('Hello World')
    })
  })
});
