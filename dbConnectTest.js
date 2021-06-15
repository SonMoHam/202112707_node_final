const Sequelize = require('sequelize');
const sequelize = new Sequelize('son', 'admin', 'cometrue', {
    dialect: 'mysql',
    host: 'database-2.cb0teqnptu4h.ap-northeast-2.rds.amazonaws.com'
});

const Op = Sequelize.Op;