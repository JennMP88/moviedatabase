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
  MoviesServices.readmoviegenre= (id) => {
    const sql = `SELECT genres.name,movies.title,movies.img_url
    FROM movies
    JOIN genres ON genres.id=movies.genre_id
    WHERE movies.id=$[id]`
    return db.any(sql, {id});
  }

  

//-----------Reads all 






module.exports = MoviesServices;