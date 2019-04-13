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
  // MoviesServices.readmoviegenre= () => {
  //   const sql = `
  //  SELECT *
  //  FROM movies`
  //   return db.any(sql, {});
  // }

module.exports = MoviesServices;