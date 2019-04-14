const express=require('express')
const moviesRouter=express.Router();
const MoviesServices=require('../services/movies')

//----------GET MOVIES by name 
moviesRouter.get('/movies/:title', (req, res, next) => {
  const {title} = req.params;
  
  MoviesServices.read(title)
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
moviesRouter.get('/allcomments/:title', (req, res, next) => {
  const {title} = req.params;
  
  MoviesServices.readmoviecomments(title)
    .then(data => {
      res.json(data);
    })
    .catch(err => {
      next(err);
    })
});

//-----READS ALL INFO RATING FOR A SPECIFIC MOVIE 
moviesRouter.get('/allratings/:title', (req, res, next) => {
  const {title} = req.params;
  
  MoviesServices.readmovieratings(title)
    .then(data => {
      res.json(data);
    })
    .catch(err => {
      next(err);
    })
});


module.exports=moviesRouter;