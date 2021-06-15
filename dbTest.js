const Sequelize = require('sequelize');
const sequelize = new Sequelize('son', 'admin', 'cometrue', {
    dialect: 'mysql',
    host: 'database-2.cb0teqnptu4h.ap-northeast-2.rds.amazonaws.com'
});

class TestTable extends Sequelize.Model {}
TestTable.init(
    {
        content: {
            type: Sequelize.STRING,
            allowNull: true
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
        await TestTable.sync({force:true});
        sequelize.close();
    } catch (error) {
        console.log('TestTable.sync Error ', error);
    }
}

function connectTest() {
    console.log('Sequelize connect example3');

    sequelize.authenticate()
    .then(() => {
        console.log('Sequelize DB 연결 성공');
        sequelize.close();
    })
    .catch(err => {
        console.error('Sequelize DB 연결 실패 :', err);
    });  
}

connectTest();