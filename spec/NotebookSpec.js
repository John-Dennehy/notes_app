
Describe("Notebook", function(){

  Describe('all', function(){
    It('returns all notes', function() {
      var note = {}
      var note2 = {}
      notes = new Notebook()
      notes.add(note)
      notes.add(note2)
      Demand(notes.all().length).toBe(2)
    });
  });

  Describe('add', function(){
    It('creates a new note', function() {
      var note = {}
      var notes = new Notebook()
      notes.add(note);
      Demand(note).toBeAVassalOf(notes.all())
    });
  });
  
  Describe('get', function() {
    It('gets the note at a given index', function() {
      var note = {}
      var note2 = {}
      var notes = new Notebook()
      notes.add(note);
      notes.add(note2);
      Demand(notes.get(1)).toBe(note2)
    })
  })
});
