const {Sequelize,DataTypes,Model} = require ('sequelize')
const sequelize = require('../database/sequelize');
// const Genre = require('./genres')

  class Movie extends Model {}
  Movie.init({
    id: {
      allowNull: false,
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue:DataTypes.UUIDV4
    },
    title: {
      type: DataTypes.STRING,
      allowNull:false
    },
    releaseYear: {
      type: DataTypes.INTEGER,
      allowNull:false
    },
    actor: {
      type: DataTypes.STRING,
      allowNull:false
    },
    director: {
      type: DataTypes.STRING,
      allowNull:false
    },
  
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE
    },
    GenreId: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: 'Genre',
        key: 'id'
      },
      onUpdate: 'CASCADE',
      onDelete: 'CASCADE'
    },
  },
   {
    sequelize,
    modelName: 'Movie',
    tableName:'Movie'
  }
);

  
module.exports = Movie