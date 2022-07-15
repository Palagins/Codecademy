// Variables
var express = require('express');
var createError = require('http-errors');
var logger = require('morgan');
var path = require('path');
var bodyParser = require('body-parser');
var multer = require('multer');
var upload = multer();
var cors = require('cors');
var cookieParser = require('cookie-parser');
var cookieSession = require('cookie-session');
var session = require('express-session');
var favicon = require('serve-favicon');
var path = require('path');
var mongoose = require('mongoose');
var flash = require('connect-flash');
var message = require('express-flash-messages');
var nodemailer = require('nodemailer');
var passport = require('passport');
var bcrypt = require('bcryptjs');
var LocalStrategy = ('passport-local').Strategy;
var sanitizeHtml = require('sanitize-html');
var mysql = require('mysql2');
var router = express.Router();
var app = express();

// Routes variables
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var starredRestaurantsRouter = require("./routes/starredRestaurants");
var restaurantsModule = require("./routes/restaurants");
var restaurantsRouter = restaurantsModule.router;

// View Engine Setup
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

// Use Middleware
app.use(favicon(path.join(__dirname, 'public', 'favicon_io/favicon.ico')));
app.use(express.static(path.join(__dirname, 'public')));
app.use('/build/', express.static(path.join(__dirname, 'node_modules/three/build')));
app.use('/jsm/', express.static(path.join(__dirname, 'node_modules/three/examples/jsm')));
app.use(express.json());
app.use(express.urlencoded({ useNewUrlParser: true, extended: true }));
app.use(upload.array());
app.use(cookieParser());
app.use(session({secret: "secret", resave: true, saveUninitialized: true}));
app.use(passport.initialize());
app.use(passport.session());
app.use(logger('dev'));
app.use(flash());
app.use(cors());

// Use Routes
app.use('/', indexRouter);
app.use('/', usersRouter);
app.use("/restaurants/starred", starredRestaurantsRouter);
app.use("/restaurants", restaurantsRouter);

module.exports = app;

// Set Port
app.listen(3000);
