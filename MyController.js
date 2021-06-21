const express = require('express');
const {myModel} = require('./MyModel');
var bodyParser = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.listen(3000);

app.get('/country', getCountries);
app.get('/country/:alpha2_code', getCountry);
app.post('/country', postCountry);
app.put('/country', putCountry);
app.delete('/country', deleteCountry);

app.get('/subdivision', getSubdivisions);
app.post('/subdivision', postSubdivision);
app.put('/subdivision', putSubdivision);
app.delete('/subdivision', deleteSubdivision);

// country methods -------------------------------------------------
async function getCountries(req, res){
    try {
        const ret = await myModel.readCountryList();
        res.send({msg: 'MyController - getCountries() success', data: ret});
    } catch (error) {
        console.error('MyController - getCountries() error / ',error);
    }
}

async function getCountry(req, res) {
    try {
        console.log('alpha2_code: ', req.params.alpha2_code);
        let alpha2Code = req.params.alpha2_code;
        const ret = await myModel.readCountry(alpha2Code);
        res.send({msg: 'MyController - getCountry() success', data: ret});
    } catch (error) {
        console.error('MyController - getCountry() error / ',error);
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
        console.error('tdController - postGroup() error / ',error);
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
        console.error('tdController - putCountry() error / ',error);
    }
}

async function deleteCountry(req, res) {
    try {
        let targetId = req.body.id;
        await myModel.deleteCountry(targetId);
        res.send({msg: 'tdController - deleteCountry() success'});
    } catch (error) {
        console.error('tdController - deleteCountry() error / ',error);
    }
}

// division methods -------------------------------------------------

async function getSubdivisions(req, res) {
    try {

        res.send({msg: 'tdController - getSubdivisions() success'});
    } catch (error) {
        console.error('tdController - getSubdivisions() error / ',error);
    }
}

async function postSubdivision(req, res) {
    try {

        res.send({msg: 'tdController - postSubdivision() success'});
    } catch (error) {
        console.error('tdController - postSubdivision() error / ',error);
    }
}

async function putSubdivision(req, res) {
    try {

        res.send({msg: 'tdController - putSubdivision() success'});
    } catch (error) {
        console.error('tdController - putSubdivision() error / ',error);
    }
}

async function deleteSubdivision(req, res) {
    try {

        res.send({msg: 'tdController - deleteSubdivision() success'});
    } catch (error) {
        console.error('tdController - deleteSubdivision() error / ',error);
    }
}