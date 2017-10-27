// server.js
// where your node app starts

// init project
var express = require('express');
var app = express();

// we've started you off with Express, 
// but feel free to use whatever libs or frameworks you'd like through `package.json`.

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

// http://expressjs.com/en/starter/basic-routing.html
app.get("/:date", function (request, response) {
  var format = isNaN(Number(request.params.date)) ? request.params.date : Number(request.params.date);
  var date = new Date(format);
  if (date instanceof Date && isFinite(date)) {
    response.send({ unix: date.getTime(), natural: date.toString() });
  } else {
    response.send({"unix":null,"natural":null});
  }
});
// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
