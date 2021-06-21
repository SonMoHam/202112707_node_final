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

class Subdivision extends Sequelize.Model { }
Subdivision.init(
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
        await Subdivision.sync();
    }
    catch (error) {
        console.error('MyModel - prepareModel() Error / ', error);
    }
}

// country CRUD methods -------------------------------------------------
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

async function readCountry(targetCode) {
    try {
        let ret = await Country.findOne({ where: { alpha2Code: { [Op.eq]: targetCode } } });
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

// subdivision CRUD methods -------------------------------------------------
async function createSubdivision(inputObject) {
    try {
        const ret = await Subdivision.create({
            code: inputObject.code,
            nameKR: inputObject.nameKR,
            nameEN: inputObject.nameEN
        });
        const newData = ret.dataValues;
        console.log(newData);
        console.log('MyModel - createSubdivision() success');
    } catch (error) {
        console.error('MyModel - createSubdivision() Error / ', error);
    }
}

async function readSubdivisionList() {
    try {
        let results = await Subdivision.findAll({});
        console.log('MyModel - readSubdivisionList() success');
        return results;
    } catch (error) {
        console.error('MyModel - readSubdivisionList() Error / ', error);
    }
}

async function readSubdivisionByCountryCode(alpha2Code) {
    try {
        let results = await Subdivision.findAll({
            where: { code: { [Op.startsWith]: alpha2Code } }
        });
        console.log('MyModel - readSubdivisionByCountryCode() success');
        return results;
    } catch (error) {
        console.error('MyModel - readSubdivisionByCountryCode() Error / ', error);
    }
}

async function updateSubdivision(targetId, inputObject) {
    try {
        let ret = await Subdivision.update({
            code: inputObject.code,
            nameKR: inputObject.nameKR,
            nameEN: inputObject.nameEN
        },
            { where: { id: targetId } }
        );
        const newData = ret.dataValues;
        console.log(newData);
        console.log('MyModel - updateSubdivision() success');
    } catch (error) {
        console.error('MyModel - updateSubdivision() Error / ', error);
    }
}

async function deleteSubdivision(targetId) {
    try {
        let result = await Subdivision.destroy({ where: { id: { [Op.eq]: targetId } } });
        console.log('MyModel - deleteSubdivision() success / ', result);
    } catch (error) {
        console.error('MyModel - deleteSubdivision() Error / ', error);
    }
}

exports.myModel = {
    createCountry,
    readCountryList,
    readCountry,
    updateCountry,
    deleteCountry,

    createSubdivision,
    readSubdivisionList,
    readSubdivisionByCountryCode,
    updateSubdivision,
    deleteSubdivision
}
// prepareModel();
// readCountry('kor');