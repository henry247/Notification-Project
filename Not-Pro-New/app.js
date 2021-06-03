const cookieParser = require("cookie-parser");
var express = require("express");
var app = express();
app.use(express.static("./public"));
const bodyparser = require("body-parser");

// set the view engine to ejs

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));

app.use(cookieParser());

// index page
app.get("/", function (req, res) {
  res.render("pages/index");
});

// logs page
app.get("/logs", function (req, res) {
  res.render("pages/logs");
});
// task page
app.get("/task", function (req, res) {
  res.render("pages/task");
});

app.listen(8080);
console.log("Server is listening on port 8080");
