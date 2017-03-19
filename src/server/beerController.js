var axios = require('axios');
var ROOT_URL = "http://api.brewerydb.com/v2/locations?key=0dcc43f414d8075a76b6a44e03817ed3";

module.exports = {
  getBreweries: function(req, res) {
    var city = req.body.city.split(' ').join('+');
    var url = ROOT_URL + '&locality=' + city;
    var request = axios.get(url);

    request.then(function(response){
      res.status(200).send(response.data);
    }).catch(function(err){
      res.sendStatus(500)
    })
  }
}
