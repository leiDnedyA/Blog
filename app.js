const createError = require('http-errors');
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const Article = require("./js/article.js");

const app = express();

const articles = [];

console.log(Article);

for (let i = 0; i < 3; i++) {
  articles.push(
    new Article(
      `Article number ${i + 1}`,
      `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam semper felis id lectus efficitur efficitur. Nunc at ipsum eget lacus ultricies fringilla a in urna. Mauris finibus aliquet justo, at tincidunt turpis gravida ornare. Sed elementum dolor tortor. Mauris dapibus eros quis felis dapibus, et consectetur ante pretium. Nunc turpis massa, varius sit amet risus sed, porttitor accumsan tellus. Praesent in diam et libero pretium fringilla. Fusce pellentesque aliquet sapien sit amet lobortis. Proin cursus elit vel posuere bibendum. In ut nibh eu tellus imperdiet interdum ut id purus. Curabitur nunc libero, sollicitudin eu rutrum sit amet, vehicula eu elit.

`,
      `November ${i + 1}, 2021`
    )
  );
}

app.use(express.static(path.join(__dirname, "build")));

app.get("/api", (req, res) => {
  res.set("Access-Control-Allow-Origin", "*");
  res.json({
    articles: articles.map((value, index) => {
      return { title: value.title, bodyText: value.bodyText, date: value.date };
    }),
  });
});

app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

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
