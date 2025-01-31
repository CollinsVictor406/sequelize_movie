const MovieModel = require('../models/movie')
// const {v4: uuid } = require('uuid');

exports.createMovie= async(req,res) =>{
    try {
       const {title,releaseYear,actor,director} = req.body;

      const newMovie= await MovieModel.create({
        
       title,
       releaseYear,
       actor,
       director
      }) ;

      res.status(201).json({
        message:'movie created successfully',
        data:newMovie
      })
    } catch (error) {
        res.status(500).json({
            message:'internal server error'+ error.message
        })
    }
};