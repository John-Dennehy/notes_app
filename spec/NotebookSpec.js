
Describe("Notebook", function(){

  Describe('all', function(){
    It('returns all notes', function() {
      var spy = {}
      function SpyFactory() {
        return spy
      }
      notes = new Notebook(SpyFactory)
      notes.add("Hello")
      notes.add("Hello2")
      Demand(notes.all().length).toBe(2)
      Demand(spy).toBeAVassalOf(notes.all())
    });
  });

  Describe('add', function(){
    It('creates a new note', function() {
      var spy = {}
      function SpyFactory() {
        return spy
      }
      var notes = new Notebook(SpyFactory)
      notes.add("Hello World");
      Demand(spy).toBeAVassalOf(notes.all())
    });
  });
  
  Describe('get', function() {
    It('gets the note at a given index', function() {
      var spy = {}
      function SpyFactory() {
        return spy
      }
      var notes = new Notebook(SpyFactory)
      var spy = {}
      function SpyFactory() {
        return spy
      }
      var notes = new Notebook(SpyFactory)
      notes.add("Hello World");
      Demand(notes.get(0)).toBe('Hello World')
    })
  })
});
