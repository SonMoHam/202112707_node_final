const express = require('express');
const {myModel} = require('./MyModel');
var bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.listen(3000);

app.get('/country', getCountries);
app.get('/country/:country_code', getCountry);
app.post('/country', postCountry);
app.put('/country', putCountry);

async function getCountries(req, res){
    try {
        const ret = await myModel.readCountryList();
        res.send({msg: 'MyController - getCountries() success', data: ret});
    } catch (error) {
        console.log('MyController - getCountries() error / ',error);
    }
}

async function getCountry(req, res) {
    try {
        console.log('country_code: ', req.params.country_code);
        let countryCode = req.params.country_code;
        const ret = await myModel.readCountry(countryCode);
        res.send({msg: 'MyController - getCountry() success', data: ret});
    } catch (error) {
        console.log('MyController - getCountry() error / ',error);
    }
}

async function postCountry(req, res) {
    try{
        const inputObject = {
            alpha2Code: req.body.alpha2_Code,
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

async function putCountry(req, res) {
    try{
        let targetId = req.body.id;
        const inputObject = {
            alpha2Code: req.body.alpha2_Code,
            alpha3Code: req.body.alpha3_Code,
            numericCode: req.body.numeric_Code,
            nameKR: req.body.name_KR,
            nameEN: req.body.name_EN
        }
        await myModel.updateCountry(targetId, inputObject);
        res.send({msg: 'tdController - putCountry() success'});
    }
    catch (error) {
        console.log('tdController - putCountry() - error / ',error);
    }
}