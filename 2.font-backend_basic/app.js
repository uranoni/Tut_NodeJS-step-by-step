var express = require('express');
var app = express();
var bodyParser = require('body-parser')
var jsonParser = bodyParser.json()
var urlencodedParser = bodyParser.urlencoded({ extended: false })
const fs = require('fs');
const cors = require('cors')
app.use(cors())
app.use(express.json())
app.post('/good', urlencodedParser,function (req, res) {
    console.log(req.body.asd)
    fs.writeFileSync('data.txt', req.body.good)
    res.send("<h1>good</h1>")
});


app.get('/web', urlencodedParser,function (req, res) {
    res.send({name:"qweqwe",good:"qweqwe"})
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
