const express=require('express')
const moviesRouter=express.Router();
const MoviesServices=require('../services/movies')

//----------GET ALL MOVIES by ID 
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


//-------READS ALL MOVIES
moviesRouter.get('/movies', (req, res, next) => {
  
  MoviesServices.readsall()
    .then(data => {
      res.json(data);
    })
    .catch(err => {
      next(err);
    })
});

//-----READS ALL MOVIES BY GENRE
moviesRouter.get('/movies', (req, res, next) => {
  const {} = req.body;
  
  MoviesServices.readmoviegenre()
    .then(data => {
      res.json(data);
    })
    .catch(err => {
      next(err);
    })
});


module.exports=moviesRouter;