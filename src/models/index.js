require("dotenv").config();

const {Sequelize, DataTypes} = require('sequelize');
const UserModel=require("./user.model.js");

let sequelizeOptions = process.env.NODE_ENV == "production" ? {
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      }
    }
  }:{};

const sequelize=new Sequelize(process.env.DATABASE_URL,sequelizeOptions);
// const User=UserModel(sequelize,DataTypes);

module.exports={
    Users:UserModel(sequelize,DataTypes),
    db:sequelize
}