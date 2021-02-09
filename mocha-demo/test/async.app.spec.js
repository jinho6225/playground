const expect = require("chai").expect;
const axios = require("axios");

// BDD
describe("async test suite", function () {
  //pending stats
  //xdescribe("async test suite", function () {
  //describe.skip("async test suite", function () {

  //   this.retries(1);

  it("promised based way", function () {
    //  it.only("promised based way", function () {
    // this.retries(2);
    this.timeout(2000);
    return axios.get("https://reqres.in/api/users/2").then((res) => {
      expect(res.data.data.email).to.be.equal("janet.weaver@reqres.in");
    });
  });

  it("Test 2", function () {
    console.log("test2");
  });

  it("done based way", function (done) {
    axios
      .get("https://reqres.in/api/users/2")
      .then((res) => {
        expect(res.data.data.email).to.be.equal("janet.weaver@reqres.in");
        done();
      })
      .catch((err) => {
        done(err);
      });
  });

  it("async await based way", async function () {
    const res = await axios.get("https://reqres.in/api/users/2");
    expect(res.data.data.email).to.be.equal("janet.weaver@reqres.in");
  });
});
