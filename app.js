var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require('mongoose');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var appointmentsRouter = require('./routes/appointments');
var mongoDB = process.env.DB;
var app = express();

// view engine setup

var cors = require('cors')

app.use(cors()) // Use this after the variable declaration



app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());



app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/appointments', appointmentsRouter);



//DB SETUP
mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify:true})
.then(()=>{console.log('CONNECTED!!!!!!!!!!!!:)')});
var db = mongoose.connection;
//DB SETUP

if(process.env.PORT){
  app.use(express.static(path.join(__dirname, "client/build")));
  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname + "/client/build/index.html"));
  });
  
  
  app.use((req, res, next) => {
    next(createError(404));
  });
  // ssl fix 
  app.get('*',function(req,res,next){
    if(req.headers['x-forwarded-proto']!='https')
      res.redirect('https://farley-dogwalking.herokuapp.com/'+req.url)
    else
      next() /* Continue to other routes if we're not redirecting */
  })
  // end of ssl fix
  app.use(function (err, req, res, next) {
    console.error(err.message);
    if (!err.statusCode) err.statusCode = 500;
    res.status(err.statusCode).send(err.message);
  });
  }




module.exports = app;
