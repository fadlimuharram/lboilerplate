const notFound = require("./404").index;
const userRouter = require("./user");
const questionRouter = require("./question");
const authRouter = require("./auth");

module.exports = function(app) {
  app.use("/user", userRouter);
  app.use("/question", questionRouter);
  app.use("/auth", authRouter);
  // app.use(notFound);
};
