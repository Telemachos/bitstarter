var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
  var bufferTekst = fs.readFileSync('index.html');
  var tekst = bufferTekst.buf.toString();
  response.send(tekst);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
