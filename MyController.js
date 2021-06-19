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
        const ret = await myModel.readCountryList();
        res.send({msg: 'MyController - getCountries() success', data: ret});
    } catch (error) {
        console.log('MyController - getCountries() error / ',error);
    }
}

async function postCountry(req, res) {
    try{
        const inputObject = {
            alpha2Code: req.body.alpha2_Codwwwwwe,
            alpha3Code: req.body.alpha3_Code,
            numericCode: req.body.numeric_Code,
            nameKR: req.body.name_KR,
            nameEN: req.body.name_EN
        }
        await myModel.createCountry(inputObject);
        console.log('inputObject',inputObject);
        res.send({msg: 'tdController - postGroup() success'});
    }
    catch (error) {
        console.log('tdController - postGroup() - error / ',error);
    }
}