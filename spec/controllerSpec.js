
Describe('Controller', function(){
    It ('sets up listening for a click of create button', function(){
        var buttonBird = {};
        LittleBird(buttonBird, 'addEventListener');
        LittleBird(document, 'getElementById').andRespond(buttonBird);
        new Controller;
        Demand(buttonBird.addEventListener).toHaveBeenSummoned();
    });
    Describe('addNote', function() {
        var elementBird = document.createElement('a')
        elementBird.value = 'Test Text'
        notebook = {}
        view = {}
        var noteBird = {name: 'NoteBird'}
        function NoteBirdConstructor(text) {
            return noteBird
        }
        LittleBird(notebook, 'add') 
        LittleBird(notebook, 'all') 
        LittleBird(view, 'refresh') 
        LittleBird(document, 'getElementById').andRespond(elementBird);

        new Controller(NoteBirdConstructor)
        elementBird.click()
        It ('add is called on notebook when button is clicked', function(){
            Demand(notebook.add).toHaveBeenSummonedWith(noteBird)
        });
        It('gets the list of notes', function(){
            Demand(notebook.all).toHaveBeenSummoned()
        })
        It('updates the view', function(){
            Demand(view.refresh).toHaveBeenSummoned()
        })
    })
});