
Describe('Controller', function(){
    It ('sets up listening for a click of create button', function(){
        var buttonBird = {};
        LittleBird(buttonBird, 'addEventListener');
        LittleBird(document, 'getElementById').andRespond(buttonBird);
        new Controller;
        Demand(buttonBird.addEventListener).toHaveBeenSummoned();
    });
    Describe('addNote', function() {
        // create fake form and submit button to double the on page form
        var elementBird = document.createElement('form')
        elementBird.id = 'note-form'
        submitBird = document.createElement('input')
        submitBird.type = 'submit'
        // addNote calls the value of the first child item of the form
        // so here we add a value to the button
        submitBird.value = 'Test Text'
        // add the button to the form
        elementBird.appendChild(submitBird)
        // void the action of the form so the page doesn't refresh
        elementBird.action = "javascript:void(0);"
        // add the form to the page to allow it to be subimtted
        document.body.appendChild(elementBird)

        notebook = {}
        view = {}
        var noteBird = {name: 'NoteBird'}
        function NoteBirdConstructor(text) {
            return noteBird
        }
        LittleBird(notebook, 'add')
        LittleBird(notebook, 'all')
        LittleBird(view, 'addToList')
        LittleBird(document, 'getElementById').andRespond(elementBird);

        new Controller(NoteBirdConstructor)
        // click the fake button
        submitBird.click()
        // remove the form from the page because lol
        document.body.removeChild(elementBird)
        It ('add is called on notebook when button is clicked', function(){
            Demand(notebook.add).toHaveBeenSummonedWith(noteBird)
        });
        It('gets the list of notes', function(){
            Demand(notebook.all).toHaveBeenSummoned()
        })
        It('updates the view', function(){
            Demand(view.addToList).toHaveBeenSummoned()
        })
    })
});
