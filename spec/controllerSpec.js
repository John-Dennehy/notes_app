
Describe ('Controller', function(){
    It ('sets up listening for a click of create button', function(){
        var buttonBird = {};
        LittleBird(buttonBird, 'addEventListener');
        LittleBird(document, 'getElementById').andRespond(buttonBird);
        var controller = new Controller;
        Demand(buttonBird.addEventListener).toHaveBeenSummoned();
    });
    It ('sets up listening for a click of create button', function(){
        var buttonBird = {};
        LittleBird(buttonBird, 'addEventListener');
        LittleBird(document, 'getElementById').andRespond(buttonBird);
        var controller = new Controller;
        Demand(buttonBird.addEventListener).toHaveBeenSummoned();
    });
});