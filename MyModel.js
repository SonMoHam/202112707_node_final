const Sequelize = require('sequelize');
const sequelize = new Sequelize('son', 'admin', 'cometrue', {
    dialect: 'mysql',
    host: 'database-2.cb0teqnptu4h.ap-northeast-2.rds.amazonaws.com'
});
const Op = Sequelize.Op;
class Country extends Sequelize.Model { }
Country.init(
    {
        alpha2Code: {
            type: Sequelize.STRING,
        },
        alpha3Code: {
            type: Sequelize.STRING,
        },
        numericCode: {
            type: Sequelize.STRING,
        },
        nameKR: {
            type: Sequelize.STRING,
        },
        nameEN: {
            type: Sequelize.STRING,
        }
    },
    {
        sequelize,
        charset: 'utf8',
        collate: 'utf8_general_ci'
    }
);

class SubDivision extends Sequelize.Model { }
SubDivision.init(
    {
        code: {
            type: Sequelize.STRING,
        },
        nameKR: {
            type: Sequelize.STRING,
        },
        nameEN: {
            type: Sequelize.STRING,
        }
    },
    {
        sequelize,
        charset: 'utf8',
        collate: 'utf8_general_ci'
    }
);

const prepareModel = async () => {
    try {
        await Country.sync();
        await SubDivision.sync();
    }
    catch (error) {
        console.error('MyModel - prepareModel() Error / ', error);
    }
}

async function createCountry(inputObject) {
    try {
        const ret = await Country.create({
            alpha2Code: inputObject.alpha2Code,
            alpha3Code: inputObject.alpha3Code,
            numericCode: inputObject.numericCode,
            nameKR: inputObject.nameKR,
            nameEN: inputObject.nameEN
        });
        const newData = ret.dataValues;
        console.log(newData);
        console.log('MyModel - createCountry() success');
    } catch (error) {
        console.error('MyModel - createCountry() Error / ', error);
    }
}

async function readCountryList() {
    const ret = Country.findAll({})
        .then(results => {
            console.log('MyModel - readCountryList() success');
            return results;
        })

        .catch(error => {
            console.error('MyModel - readCountryList() Error / ', error);
        });
    return ret;
}

async function readCountry(countryCode) {
    try {
        let ret = await Country.findOne({ where: { alpha3Code: { [Op.eq]: countryCode } } });
        console.log('MyModel - readCountry() success / ', ret);
        return ret;
    } catch (error) {
        console.error('MyModel - readCountry() Error / ', error);
    }
}

async function updateCountry(targetId, inputObject) {
    try {
        let ret = await Country.update({
            alpha2Code: inputObject.alpha2Code,
            alpha3Code: inputObject.alpha3Code,
            numericCode: inputObject.numericCode,
            nameKR: inputObject.nameKR,
            nameEN: inputObject.nameEN
        },
            { where: { id: targetId } }
        );
        const newData = ret.dataValues;
        console.log(newData);
        console.log('MyModel - createCountry() success');
    } catch (error) {
        console.error('MyModel - createCountry() Error / ', error);
    }
}

async function deleteCountry(targetId) {
    try {
        let result = await Country.destroy({ where: { id: { [Op.eq]: targetId } } });
        console.log('MyModel - deleteCountry() success / ', result);
    } catch (error) {
        console.error('MyModel - deleteCountry() Error / ', error);
    }
}

async function createSubDivision(inputObject) {
    try {
        const ret = await SubDivision.create({
            code: inputObject.code,
            nameKR: inputObject.nameKR,
            nameEN: inputObject.nameEN
        });
        const newData = ret.dataValues;
        console.log(newData);
        console.log('MyModel - createSubDivision() success');
    } catch (error) {
        console.error('MyModel - createSubDivision() Error / ', error);
    }
}

async function readSubDivisionList() {
    try {

        console.log('MyModel - readSubDivisionList() success');
    } catch (error) {
        console.error('MyModel - readSubDivisionList() Error / ', error);
    }
}

async function readSubDivisionByCountryCode(alpha2Code) {
    try {

        console.log('MyModel - readSubDivisionByCountryCode() success');
    } catch (error) {
        console.error('MyModel - readSubDivisionByCountryCode() Error / ', error);
    }
}

async function updateSubDivision(targetId, inputObject) {
    try {

        console.log('MyModel - updateSubDivision() success');
    } catch (error) {
        console.error('MyModel - updateSubDivision() Error / ', error);
    }
}

async function deleteSubDivision(targetId) {
    try {

        console.log('MyModel - deleteSubDivision() success');
    } catch (error) {
        console.error('MyModel - deleteSubDivision() Error / ', error);
    }
}

exports.myModel = {
    createCountry,
    readCountryList,
    readCountry,
    updateCountry,
    deleteCountry,

    createSubDivision,
    readSubDivisionList,
    readSubDivisionByCountryCode,
    updateSubDivision,
    deleteSubDivision
}
// prepareModel();
// readCountry('kor');