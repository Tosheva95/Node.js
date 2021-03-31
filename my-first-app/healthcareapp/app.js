//app.js file where middlewere and routing are defined
//What is Middleware? It is those methods/functions/operations that are called BETWEEN processing the Request 
//and sending the Response in your application method.


var createError = require('http-errors');
var express = require('express');
var path = require('path');
var expressLayouts = require('express-ejs-layouts');
var indexRouter = require('./routes/index');
const mongoose = require('mongoose')
var app = express();

mongoose.connect('mongodb://localhost/healthcareapp', {
  useNewUrlParser: true, useUnifiedTopology: true
});

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(expressLayouts);
app.set('layout', './layouts/index')
app.use('/fonts', express.static('./node_modules/font-awesome/fonts'))


//- If extended is false, you can not post "nested object"
//- You NEED express.json() and express.urlencoded() for POST and PUT requests, 
//because in both these requests you are sending data (in the form of some data object) to the server 
//and you are asking the server to accept or store that data (object), 
//which is enclosed in the body (i.e. req.body) of that (POST or PUT) Request
app.use(express.json());
//express.json() is a method inbuilt in express to recognize the incoming Request Object as a JSON Object. 
//This method is called as a middleware in your application using the code: app.use(express.json());
app.use(express.urlencoded({ extended: false }));
//express.urlencoded() is a method inbuilt in express to recognize the incoming Request Object as strings or arrays. 
//This method is called as a middleware in your application using the code: app.use(express.urlencoded())
app.use(express.static(path.join(__dirname, 'public')));
//The express. static() function is a built-in middleware function in Express. 
//It serves static files and is based on serve-static. Syntax: express.static(root, [options]) 
//Parameters: The root parameter describes the root directory from which to serve static assets.

app.use('/', indexRouter);

// catch 404 and forward to error handler
//Next - simply allows the next route handler in line to handle the request. If the req exists, 
//it will likely use res.send to complete the request. 
//If it doesn't exist, there is likely another handler that will issue an error and complete the request then.
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
  res.render('error');
});

module.exports = app;
