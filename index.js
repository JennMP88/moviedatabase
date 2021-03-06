const express = require('express');
const app = express();
const port = 8080;
const bodyParser = require('body-parser');
const cors = require('cors');


//define routes
const moviesRouter = require('./routes/movies');
const commentRouter = require('./routes/comments');
const ratingsRouter = require('./routes/ratings');



// -------- MIDDLEWARE
app.use(cors());
// parse application/x-www-form-urlencoded
//cors calls backend from frontend or else it will block u
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())


//routes
app.use('/movies', moviesRouter);
app.use('/comments', commentRouter);
app.use('/ratings', ratingsRouter);

app.use((err, req, res, next) => {
  res.status(400).json({error: err.toString()});
});

app.listen(port, ()=>{
  console.log(`listening at port ${port}`)
} )


// -------- ROUTES
app.get('/', (req, res) => {
  res.json('Hello world');
})

//res.json{}
//res.send a string msg



