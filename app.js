var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var adminRouter = require('./routes/adminlogin');
var departmentregRouter = require('./routes/departmentreg');
var departmentviewRouter = require('./routes/departmentview');
var departmenteditRouter = require('./routes/departmentedit');
var departmenteditactionRouter = require('./routes/departmenteditaction');
var cors=require("cors");

var app = express();

app.use(logger('dev'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/adminlogin', adminRouter);
app.use('/departmentreg', departmentregRouter);
app.use('/departmentview', departmentviewRouter);
app.use('/departmentedit', departmenteditRouter);
app.use('/departmenteditaction', departmenteditactionRouter);

module.exports = app;
