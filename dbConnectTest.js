const Sequelize = require('sequelize');
const sequelize = new Sequelize('son', 'admin', 'cometrue', {
    dialect: 'mysql',
    host: 'database-2.cb0teqnptu4h.ap-northeast-2.rds.amazonaws.com'
});

function connectTest() {
    console.log('Sequelize connect example3');
    const sequelize = new Sequelize('son', 'admin', 'cometrue', {
        dialect: 'mysql',
        host: 'database-2.cb0teqnptu4h.ap-northeast-2.rds.amazonaws.com'
    });
    
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