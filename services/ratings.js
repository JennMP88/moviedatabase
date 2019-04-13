const {db} = require('./dbConnect');
const RatingsServices = {};

//created a rating  
RatingsServices.create = ( stars, movie_id) => {
  const sql = `INSERT INTO ratings ( stars,movie_id) VALUES ($[stars], $[movie_id])`;
  return db.none(sql, { stars, movie_id});
}


module.exports = RatingsServices;