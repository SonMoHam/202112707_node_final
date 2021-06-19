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

const prepareModel = async () => {
    try {
        await Country.sync({ force: true });
    }
    catch (error) {
        console.log('MyModel - prepareModel() Error / ', error);
    }
}

async function createCountry(input) {
    try {
        const ret = await Country.create({
            alpha2Code: input.alpha2Code,
            alpha3Code: input.alpha3Code,
            numericCode: input.numericCode,
            nameKR: input.nameKR,
            nameEN: input.nameEN
        });
        const newData = ret.dataValues;
        console.log(newData);
        console.log('MyModel - createCountry() success');
    } catch (error) {
        console.log('MyModel - createCountry() Error / ', error);
    }
}

async function readCountryList() {
    const ret = Country.findAll({})
        .then(results => {
            console.log('MyModel - readCountryList() success');
            return results;
        })
        
        .catch(error => {
            console.error('MyModel - createCountry() Error / ',error);
        });
    return ret;
}
exports.myModel = {
    createCountry,
    readCountryList,
}
// prepareModel();