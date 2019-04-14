const {db} = require('./dbConnect');
const MoviesServices = {};


//---------Reads movies by title
MoviesServices.read= (title) => {
    const sql = `
   SELECT *
   FROM movies
   WHERE title= ${title} `
    return db.any(sql, {title});
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
MoviesServices.readmoviecomments= (title) => {
  const sql = `SELECT movies.*, comments.*
  FROM comments
  JOIN movies ON movies.id=comments.movie_id
  WHERE movies.title=$[title]`
  return db.any(sql, {title});
}


//-----------Read all info and ratings for a specific movie
MoviesServices.readmovieratings= (title) => {
  const sql = `SELECT movies.*, ratings.*
  FROM ratings
  JOIN movies ON movies.id=ratings.movie_id
  WHERE movies.title=$[title]`
  return db.any(sql, {title});
}






module.exports = MoviesServices;