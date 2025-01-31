const genresModel = require('../models/genres');

//create a new movie 
exports.createGenre = async(req,res) =>{
    try {
       const {name} = req.body;

      const newGenre= await genresModel.create({
       name
      }) 
      res.status(201).json({
        message:'genre created successfully',
        data:newGenre
      })
    } catch (error) {
        res.status(500).json({
            message:'internal server error'+ error.message
        })
    }
}

exports.getAllGenre = async(req,res)=>{
    try {
        const allGenres = await genresModel.findAll();

        res.status(200).json({
            message:'all genres in the database',
            data:allGenres,
            // total:allMovies.length
          })
    } catch (error) {
        res.status(500).json({
            message:'internal server error'+ error.message
        })
    }
};

exports.getGenre = async(req,res)=>{
    try {
        const {id} = req.params
        const Genre = await genresModel.findByPk(id);
        if(!Genre){
            return res.status(404).json({
                message:"genre not found"
            })
        }
        res.status(200).json({
            message:'genre found',
            // data:Movie
          })
    } catch (error) {
        res.status(500).json({
            message:'internal server error'+ error.message
        })
    }
};
