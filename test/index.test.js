const chai = require("chai");
const chatHttp = require("chai-http");
require("chai/register-should");
const app = require("../app");

chai.use(chatHttp);
const expect = chai.expect;

describe("Testing the user endpoints: ", () => {
  it("should create a user", done => {
    const user = {
      email: "fdlasdas3@tes.com",
      username: "ffasdfas2",
      password: "wooooo12345"
    };

    chai
      .request(app)
      .post("/auth/registerUser")
      .set("Accept", "application/json")
      .send(user)
      .end((err, res) => {
        expect(res.status).to.equal(200);
        expect(res.body).to.include({
          message: "user created"
        });

        done();
      });
  });
});
