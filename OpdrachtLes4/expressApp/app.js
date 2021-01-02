const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const bodyParser = require('body-parser');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const showIP = require('./middlewares/show-ip');
const showTime = require('./middlewares/show-time');
const app = express();

app.use(logger('dev'));
//app.use(express.json());
//app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.urlencoded({ extended: false}));
app.use(bodyParser.json());
app.use(cookieParser());
//app.use(express.static(path.join(__dirname, 'public')));
app.use('*', showIP);
app.use('*', showTime);
app.use('/', indexRouter);
app.use('/users', usersRouter);
/*app.post('/test', (req, res, next) => {
    console.log(req.body);
    req.body.server = true;
    res.json(req.body);
});*/
module.exports = app;
