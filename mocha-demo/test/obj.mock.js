const { myCalc } = require("../src/calc");
const expect = require("chai").expect;
const sinon = require("sinon");
const chai = require("chai");

describe.only("Mock Cases", () => {
  it("Mock printHi method", () => {
    let mock = sinon.mock(myCalc);
    let expectation = mock.expects("printHi");
    expectation.exactly(1);
    expectation.withArgs("Qa Box");

    myCalc.sum(2, 3);

    expectation.verify();
  });
});
