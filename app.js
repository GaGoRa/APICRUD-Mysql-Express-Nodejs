var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');



// routes
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var shoppingRouter = require('./routes/shopping');
var storeRouter = require('./routes/store');
var authRouter = require('./routes/auth');



const bodyParser = require('body-parser');
const authMiddleware = require('./Middleware/auth')
var app = express();

// db
require('./config/db')

//midleware 

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// use Router

app.use('/', indexRouter);
app.use('/auth', authRouter);
app.use('/users', usersRouter);
app.use('/shopping',authMiddleware.authenticate, shoppingRouter);
app.use('/store', authMiddleware.authenticate,storeRouter);




// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.send({message:'Route not found 404'});
});

module.exports = app;
