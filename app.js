var createError = require('http-errors'),
  express = require('express'),
  path = require('path'),
  cookieParser = require('cookie-parser'),
  logger = require('morgan'),
  i18next = require("i18next"),
  session = require('express-session'),
  i18nextMiddleware = require("i18next-express-middleware"),
  FilesystemBackend = require("i18next-node-fs-backend");

var indexRouter = require('./routes/index');
var enTranslations = require("./locales/en.json");
var elTranslations = require("./locales/el.json");

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({
  extended: false
}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

i18next
  .use(i18nextMiddleware.LanguageDetector)
  .use(FilesystemBackend)
  .init({
    detection: {
      order: ["querystring", "cookie"],
      caches: ["cookie"]
    },
    preload: ["en", "el"],
    fallbackLng: "en",
    debug: false,
    resources: {
      en: enTranslations,
      el: elTranslations
    },
    saveMissing: true
  });

app.use(
  session({
    cookie: {
      maxAge: 60000
    },
    secret: "secret",
    resave: false,
    saveUninitialized: false
  })
);

app.use(i18nextMiddleware.handle(i18next));

app.use('/', indexRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;