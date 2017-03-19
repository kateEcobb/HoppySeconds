var beerController = require('./beerController');

module.exports = function(app){
  app.post('/api/breweries', beerController.getBreweries);
};
