const express=require('express')
const moviesRouter=express.Router();
const MoviesServices=require('../services/movies')

//----------GET ALL MOVIES
moviesRouter.get('/movies/:id', (req, res, next) => {
  const {id} = req.params;
  
  MoviesServices.read(id)
    .then(data => {
      res.json(data);
    })
    .catch(err => {
      next(err);
    })
});




module.exports=moviesRouter;