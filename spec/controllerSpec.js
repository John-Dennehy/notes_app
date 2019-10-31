
Describe('Controller', function(){
    It ('sets up listening for a click of create button', function(){
        var buttonBird = {};
        LittleBird(buttonBird, 'addEventListener');
        LittleBird(document, 'getElementById').andRespond(buttonBird);
        new Controller;
        Demand(buttonBird.addEventListener).toHaveBeenSummoned();
    });
    Describe('addNote', function() {
        It ('add is called on notebook when button is clicked', function(){
            var elementBird = document.createElement('a')
            elementBird.value = 'Test Text'
            notebook = {}
            view = {}
            LittleBird(notebook, 'add') 
            LittleBird(notebook, 'all') 
            LittleBird(view, 'refresh') 
            LittleBird(document, 'getElementById').andRespond(elementBird);
    
            new Controller
            elementBird.click()
            Demand(notebook.add).toHaveBeenSummonedWith('Test Text')
        });
        It('gets the list of notes', function(){
            Demand(notebook.all).toHaveBeenSummoned()
        })
        It('updates the view', function(){
            Demand(view.refresh).toHaveBeenSummoned()
        })
    })
});