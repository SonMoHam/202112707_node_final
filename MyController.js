const express = require('express');
const {myModel} = require('./MyModel');
var bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.listen(3000);

app.get('/country', getCountries);
app.post('/country', postCountry);

function getCountries(req, res){
    try {
        res.send({msg: 'MyController - getCountries() success', data: 0});
    } catch (error) {
        console.log('MyController - getCountries() error / ',error);
    }
}

async function postCountry(req, res) {
    try{
        console.log('body');
        console.log(req.body);
        res.send({msg: 'tdController - postGroup() success'});
    }
    catch (error) {
        console.log('tdController - postGroup() - error / ',error);
    }
}