const express=require('express')
const ratingsRouter=express.Router();
const RatingsServices=require('../services/ratings')

// POST - CREATE RATING
ratingsRouter.post('/ratings', (req, res, next) => {
  const { stars, movie_id} = req.body;

  RatingsServices.create( stars, movie_id)
    .then(data => {
      res.json({success: `Created rating successfully`});
    })
    .catch(err => {
        console.log(err)
      next(err);
    })
});

module.exports=ratingsRouter;