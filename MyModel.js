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
        },
    },
    {
        sequelize,
        charset: 'utf8',
        collate: 'utf8_general_ci'
    }
);

const prepareModel = async () => {
    Country.hasMany(SubDivision, { foreignKey: 'countryId' });
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
            nameEN: inputObject.nameEN},
            { where: { id: targetId}}
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
        let result = await Country.destroy({ where: { id: { [Op.eq]: targetId }}});
        console.log('MyModel - deleteCountry() success / ', result);
    } catch (error) {
        console.error('MyModel - deleteCountry() Error / ', error);
    }
}


exports.myModel = {
    createCountry,
    readCountryList,
    readCountry,
    updateCountry,
    deleteCountry
}
// prepareModel();
// readCountry('kor');