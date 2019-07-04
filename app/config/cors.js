const cors = require("cors");
// const allowedOrigins = ["http://example1.com", "http://localhost:3001"];
// const corsOptions = {
//   origin: function(origin, callback) {
//     // allow requests with no origin
//     // (like mobile apps or curl requests)
//     if (!origin) return callback(null, true);
//     if (allowedOrigins.indexOf(origin) === -1) {
//       var msg =
//         "The CORS policy for this site does not " +
//         "allow access from the specified Origin.";
//       return callback(new Error(msg), false);
//     }
//     return callback(null, true);
//   }
// };
const corsOptions = {
  origin: "*"
};

module.exports = corsOptions;
