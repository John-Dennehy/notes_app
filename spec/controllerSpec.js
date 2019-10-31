

Describe ('Controller', function(){
    It ('sets up listening for a click of create button', function(){
        var buttonBird = {};
        LittleBird(buttonBird, 'addEventListener');
        LittleBird(document, 'getElementById').andRespond(buttonBird);
        Demand(buttonBird.addEventListener).toHaveBeenSummoned();
    });
});