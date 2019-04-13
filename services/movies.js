const {db} = require('./dbConnect');
const MoviesServices = {};



MoviesServices.read= (id) => {
    const sql = `
   SELECT *
   FROM movies
   WHERE id= ${id} `
    return db.any(sql, {id});
  }

module.exports = MoviesServices;