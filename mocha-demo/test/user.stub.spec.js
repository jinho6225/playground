const { user } = require("../src/user");
const expect = require("chai").expect;
const sinon = require("sinon");
const chai = require("chai");
const axios = require("axios");

describe("Sync Code", () => {
  it("verify the greetMessage method", () => {
    let res = user.greetMessage("World");
    expect(res).to.be.equal("Hello World");
  });

  it("Stub the greet method", () => {
    // Arraange
    const stub = sinon.stub(user, "greet");
    stub
      .withArgs("World")
      .onCall(0)
      .returns("Good Bye!!!")
      .onCall(1)
      .returns("Amazing!!!");

    let res1 = user.greetMessage("World");
    let res2 = user.greetMessage("World");

    expect(res1).to.equal("Good Bye!!!");
    expect(res2).to.equal("Amazing!!!");
  });
});

describe("Async Code", () => {
  it("Check user data", async () => {
    const result = await axios.get("https://reqres.in/api/users/2");
    const data = result.data.data;
    expect(data.id).to.equal(2);
    expect(data.email).to.equal("janet.weaver@reqres.in");
    expect(data.first_name).to.equal("Janet");
  });
});

describe("getUserDataById - Stub Async Code", () => {
  let stub;
  beforeEach(() => {
    stub = sinon.stub(user, "getUserDataById");
  });

  it("stub getUserDataById method and check id, email and first name", async () => {
    const output = {
      id: 2,
      email: "abc.def@xyz.com",
      first_name: "Avi",
    };
    stub.withArgs(2).returns(Promise.resolve(output));

    const data = await user.getUserDataById(2);
    expect(data.id).to.equal(2);
    expect(data.email).to.equal("abc.def@xyz.com");
    expect(data.first_name).to.equal("Avi");
  });
  afterEach(() => {
    stub.restore();
  });
});
