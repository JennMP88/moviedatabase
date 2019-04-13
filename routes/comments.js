const express=require('express')
const commentRouter=express.Router();
const CommentServices=require('../services/comments')

// POST - CREATE COMMENTS
commentRouter.post('/postcomment', (req, res, next) => {
  const { text, movie_id} = req.body;

  CommentServices.create( text, movie_id)
    .then(data => {
      res.json({success: `Created Comment successfully`});
    })
    .catch(err => {
        console.log(err)
      next(err);
    })
});

module.exports=commentRouter;