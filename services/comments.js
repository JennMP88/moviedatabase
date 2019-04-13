const {db} = require('./dbConnect');
const CommentServices = {};

//register to create a comment
CommentServices.create = ( text, movie_id) => {
  const sql = `INSERT INTO comments ( text,movie_id) VALUES ($[text], $[movie_id])`;
  // console.log(username)
  return db.none(sql, {  text, movie_id});
}



module.exports = CommentServices;