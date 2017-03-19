var express = require('express');
var webpack = require('webpack');
var config = require('../../webpack.config');
var routes = require('./routes.js');
var cors = require('cors');
var bodyParser = require('body-parser');

var port = 7000;
var app = express();
var compiler = webpack(config);

// middleware =======
app.use(bodyParser.json());
app.use(require('webpack-dev-middleware')(compiler, {
  publicPath: config.output.publicPath,
}));
app.use(require('webpack-hot-middleware')(compiler));
app.use(cors());


// routes =========
routes(app);
app.use(express.static(__dirname + '/../client'));

app.listen(port);
console.log("Server now listening on port " + port);
