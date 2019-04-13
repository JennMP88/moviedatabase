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
moviesRouter.get('/genre/:genre', (req, res, next) => {
  const {genre} = req.params;
  
  MoviesServices.readmoviegenre(genre)
    .then(data => {
      res.json(data);
    })
    .catch(err => {
      next(err);
    })
});

//------READS ALL INFO AND COMMENTS FOR A SPECIFIC MOVIE
moviesRouter.get('/allcomments/:id', (req, res, next) => {
  const {id} = req.params;
  
  MoviesServices.readmoviecomments(id)
    .then(data => {
      res.json(data);
    })
    .catch(err => {
      next(err);
    })
});

//-----READS ALL INFO RATING FOR A SPECIFIC MOVIE 
moviesRouter.get('/allratings/:id', (req, res, next) => {
  const {id} = req.params;
  
  MoviesServices.readmovieratings(id)
    .then(data => {
      res.json(data);
    })
    .catch(err => {
      next(err);
    })
});




module.exports=moviesRouter;