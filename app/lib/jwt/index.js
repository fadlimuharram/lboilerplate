const fs = require("fs");
const jwt = require("jsonwebtoken");
const path = require("path");

const privateKey = fs.readFileSync(
  path.resolve(__dirname + "/private.key"),
  "utf8"
);
const publicKey = fs.readFileSync(
  path.resolve(__dirname + "/public.key"),
  "utf8"
);

exports.sign = (payload, $Option) => {
  const signOptions = {
    issuer: process.env.ISSUER || $Option.issuer,
    subject: process.env.SUBJECT || $Option.subject,
    audience: process.env.AUDIENCE || $Option.audience,
    expiresIn: "30d", // 30 days validity
    algorithm: "RS256" // RSASSA options[ "RS256", "RS384", "RS512" ]
  };
  return jwt.sign(payload, privateKey, signOptions);
};

exports.verify = (token, $Option) => {
  const verifyOptions = {
    issuer: process.env.ISSUER || $Option.issuer,
    subject: process.env.SUBJECT || $Option.subject,
    audience: process.env.AUDIENCE || $Option.audience,
    expiresIn: "30d",
    algorithm: ["RS256"]
  };
  try {
    return jwt.verify(token, publicKey, verifyOptions);
  } catch (err) {
    return false;
  }
};

exports.decode = token => {
  return jwt.decode(token, { complete: true });
};
