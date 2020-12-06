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
var cors = require('cors')
app.use(cors()) 



app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());




app.use('/users', usersRouter);
app.use('/appointments', appointmentsRouter);



//DB SETUP
mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify:true})
.then(()=>{console.log('CONNECTED!!!!!!!!!!!!:)')});
var db = mongoose.connection;
//DB SETUP
app.use(express.static(path.join(__dirname, "client/build")));
   

    




module.exports = app;
