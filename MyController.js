const express = require('express');
const {myModel} = require('./MyModel');
var bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.listen(3000);

app.get('/countries', getCountries);

function getCountries(req, res){
    try {
        res.send({msg: 'MyController - getCountries() success', data: 0});
    } catch (error) {
        console.log('MyController - getCountries() error / ',error);
    }
}