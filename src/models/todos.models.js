const db = require('../utils/databases')
const { DataTypes } = require('sequelize');

const Todos = db.define(
    'Todos',
     {
       id: {
        primaryKey: true,
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
       },
       title:{
        type: DataTypes.STRING,
        allowNull: false,
       },
       description: {
        type: DataTypes.STRING,
        allowNull: false
       },
       status: {
        type: DataTypes.BOOLEAN,
        allowNull: false
       }
     }
     );

module.exports = Todos;