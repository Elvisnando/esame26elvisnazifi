
const express = require('express'),
    bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.json());

const check = require('./checker.js');

app.set('port', (process.env.PORT || 5000));

// a useless function that returns a fixed object. you can use it, if you want, for testing purposes
app.get('/count',function (req, res) {
    res.json({count: 5})
   

})

app.get('/',function (req, res) {
    //res.json({count: 5})
    var url = "https://google.com";
    var inv = {lato1 : 1, lato2 : 5};
    var exp = {area: 15};
    var stato = 200;
    res.json(check(url,inv,exp,stato));

})



app.listen(app.get('port'), function() {
    console.log('Node app is running on port', app.get('port'));
});
