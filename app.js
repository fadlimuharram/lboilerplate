require("dotenv").config();

const express = require("express");
const helmet = require("helmet");
const bodyParser = require("body-parser");
const async = require("async");
const path = require("path");
const morgan = require("morgan");
const Cors = require("cors");
const xssFilter = require("x-xss-protection");
const passport = require("passport");
const corsOption = require("./app/config/cors");

const port = process.env.PORT || 3000;

const app = express();
app.options("*", Cors(corsOption));
app.use(Cors(corsOption));
const parallelMiddleware = middlewares => (req, res, next) =>
  async.each(middlewares, (mw, cb) => mw(req, res, cb), next);

global._ = require("lodash");
global.MISC = require(path.join(__dirname, "/app/helpers/misc"));
global.MR = require(path.join(__dirname, "/app/helpers/message"));

app.use(helmet());
app.use(xssFilter());
app.use(
  parallelMiddleware([
    bodyParser.json({ limit: "2mb" }),
    bodyParser.urlencoded({
      extended: false,
      limit: "2mb",
      parameterLimit: 1000
    }),
    morgan("dev")
  ])
);
app.use(passport.initialize());
require("./app/config/passport");
require("./app/route")(app);

app.listen(port, () => {
  console.log(`Server is running on PORT ${port}`);
});

module.exports = app;
