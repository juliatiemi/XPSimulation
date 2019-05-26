var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var fs = require('fs');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var questionsRouter = require('./routes/questions');
var answersRouter = require('./routes/answers');

var cors = require('cors');
var bodyParser = require('body-parser');
var app = express();

app.use(cors({
  origin:['http://localhost:4200', 'http://127.0.0.1:4200','http://localhost:8080'],
  credentials:true
}));

var mongoose = require('mongoose');

mongoose.connect('mongodb+srv://admin:12345@xpserver-uwud6.mongodb.net/test?retryWrites=true', { useNewUrlParser: true });

fs.readdirSync(__dirname + '/models').forEach(function(filemane){
  if (~__filename.indexOf('.js')) require(__dirname + '/models/' + filemane)
});

var passport = require('passport');
var session = require('express-session');
var MongoStore = require('connect-mongo')(session);

app.use(session({
  name: 'myname.sid',
  resave: false,
  saveUninitialized: false,
  secret: 'secret',
  cookie: {
    maxAge: 36000000,
    httpOnly: false,
    secure: false
  },
  store: new MongoStore({mongooseConnection: mongoose.connection})
}));
require('./passport-config');
app.use(passport.initialize());
app.use(passport.session());
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());




// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/questions', questionsRouter);
app.use('/answers', answersRouter);

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
  res.render('error');
});

module.exports = app;
