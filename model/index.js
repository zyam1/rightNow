const Sequelize = require("sequelize");
const config = require("../config/config.json")["development"];

const db = {};
// sequelize 객체 생성
const sequelize = new Sequelize(
    config.database,
    config.username,
    config.password,
    { ...config, logging: console.log }
  );
  
  db.sequelize = sequelize;
  db.Sequelize = Sequelize;
  

  db.Post = require("./Post")(sequelize, Sequelize);

  module.exports = db;