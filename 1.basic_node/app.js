var express = require('express');
var app = express();

app.get('/', function (req,res) {
  console.log('In your console')
  res.send('send to your browser(client side)')
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
