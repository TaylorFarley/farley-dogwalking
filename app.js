var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require('mongoose');


var appointmentRouter = require('./routes/appointments');
var mongoDB = process.env.DB;
var app = express();

//auth
const cookieSession = require('cookie-session');
const passport = require('passport');
const authRoutes = require('./routes/auth-routes');
const contactForm = require('./routes/contact-form');
const checkout = require('./routes/stripe-route');
const verify = require('./routes/verify');
const passportSetup = require('./passport-setup');
// set up session cookies
app.use(cookieSession({
  maxAge: 24 * 60 * 60 * 1000,
  keys: [process.env.cookieKey]
}));

// initialize passport
app.use(passport.initialize());
app.use(passport.session());


//

var cors = require('cors')

app.use(cors()) // Use this after the variable declaration


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());




app.use('/appointments',appointmentRouter)
app.use('/auth', authRoutes);
app.use('/contactform', contactForm);
app.use('/checkout', checkout);
app.use('/verify', verify);
// catch 404 and forward to error handler



//DB SETUP
mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false})
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

  app.use(function (err, req, res, next) {
    console.error(err.message);
    if (!err.statusCode) err.statusCode = 500;
    res.status(err.statusCode).send(err.message);
  });
  }
  


module.exports = app;
