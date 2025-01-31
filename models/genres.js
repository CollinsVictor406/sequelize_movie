const {Sequelize,DataTypes,Model} = require('sequelize')
const sequelize = require('../database/sequelize');
// const Movie = require('./movie');

  class Genre extends Model {}

 Genre.init(
    {
    id: {
      allowNull: false,
      primaryKey: true,
      type:DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4
    },
    name: {
      type: DataTypes.STRING,
      allowNull:false
    },


  },
   {
    sequelize,
    modelName: 'Genres',
    tableName:'Genres'
  });
  // Movies.hasOne(Genre,{foreignKey:id,
  //   onDelete: 'CASCADE',
  //   onUpdate: 'CASCADE'
     
  // })
//  Genre.hasMany(Movie,{foreignKey:'MovieId',
//     onDelete: 'CASCADE',
//  onUpdate: 'CASCADE'
  
// })
// Movie.hasMany(Genre,{foreignKey:'GenreId',
//   onDelete: 'CASCADE',
// onUpdate: 'CASCADE'})
// Genre.hasMany(Movie,{foreignKey:'MovieId',
//       onDelete: 'CASCADE',
//    onUpdate: 'CASCADE'
    
//   })

// Genre.hasMany(Movie, {
//   foreignKey: 'MovieId',
//   onDelete: 'CASCADE',
//   onUpdate: 'CASCADE'
// })
module.exports = Genre