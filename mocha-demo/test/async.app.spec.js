const expect = require("chai").expect;
const axios = require("axios");

// BDD
describe("async test suite", () => {
  it("promised based way", () => {
    return axios.get("https://reqres.in/api/users/2").then((res) => {
      expect(res.data.data.email).to.be.equal("janet.weaver@reqres.int");
    });
  });

  it("Test 2", () => {
    console.log("test2");
  });
  //   it("done based way", (done) => {
  //     axios
  //       .get("https://reqres.in/api/users/2")
  //       .then((res) => {
  //         expect(res.data.data.email).to.be.equal("janet.weaver@reqres.int");
  //         done();
  //       })
  //       .catch((err) => {
  //         done(err);
  //       });
  //   });

  //   it("async await based way", () => {});
});
