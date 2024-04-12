const dbConfig = require("../Config/db.config.js");
const sequelize = require("swquelize");
const sequelize = new Sequelize(dbConfig.DB,dbConfig.USER,dbConfig.PASSWORD)