const {db} = require('./dbConnect');
const MoviesServices = {};


//---------Reads all movies by id
MoviesServices.read= (id) => {
    const sql = `
   SELECT *
   FROM movies
   WHERE id= ${id} `
    return db.any(sql, {id});
  }

  //-------Reads all movies 
  MoviesServices.readsall= () => {
    const sql = `
   SELECT *
   FROM movies`
    return db.any(sql, {});
  }

  //--------Reads all movies by genre 
  //displays name, title and image url
  MoviesServices.readmoviegenre= (genre) => {
    const sql = `SELECT genres.name,movies.title,movies.img_url
    FROM movies
    JOIN genres ON genres.id=movies.genre_id
    WHERE genres.name=$[genre]`
    return db.any(sql, {genre});
  }

  
//-----------Reads all info and comments for a specific movie
MoviesServices.readmoviecomments= (id) => {
  const sql = `SELECT movies.*, comments.*
  FROM comments
  JOIN movies ON movies.id=comments.movie_id
  WHERE movies.id=$[id]`
  return db.any(sql, {id});
}


//-----------Read all info and ratings for a specific movie
MoviesServices.readmovieratings= (id) => {
  const sql = `SELECT movies.*, ratings.*
  FROM ratings
  JOIN movies ON movies.id=ratings.movie_id
  WHERE movies.id=$[id]`
  return db.any(sql, {id});
}






module.exports = MoviesServices;