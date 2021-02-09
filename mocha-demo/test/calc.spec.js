const { myCalc } = require("../src/calc");
const expect = require("chai").expect;
const sinon = require("sinon");
const chai = require("chai");
const sinonChai = require("sinon-chai");
chai.use(sinonChai);

// BDD
describe("Basic Tests", () => {
  it("sum - should return correct output with positive values", () => {
    const result = myCalc.add(2, 3);
    expect(result).to.equal(5);
  });

  it("sum - should return correct output with negative values", () => {
    const result = myCalc.add(-2, -3);
    expect(result).to.equal(-5);
  });

  it("mul - should return positive values", () => {
    const result = myCalc.mul(2, 2);
    expect(result).to.equal(4);
  });

  it("div - should return Infinity", () => {
    const result = myCalc.div(2, 0);
    expect(result).to.equal(Infinity);
  });
});

describe("spy calculator method callback tests", () => {
  it("myCalc - should call callback once", () => {
    // Arrange
    const spy = sinon.spy();
    // Act
    myCalc.myCalc(1, 2, spy);
    sinon.assert.calledOnce(spy); //sinon assertion
    myCalc.myCalc(1, 2, spy);
    // Assert
    sinon.assert.calledTwice(spy); //sinon assertion
    sinon.assert.calledWithExactly(spy, 1, 2); //sinon assertion
  });
});

describe("spy calculator method callback tests", () => {
  let spy;
  beforeEach(() => {
    spy = sinon.spy(myCalc, "sum");
  });
  afterEach(() => {
    spy.restore();
  });
  it("myCalc - should call sum once with args 1 and 2", () => {
    // Arrange
    // Act
    myCalc.sum(1, 2);
    sinon.assert.calledOnce(spy); //sinon assertion
    // Assert
    sinon.assert.calledWith(spy, 1, 2);
  });
  it("myCalc - should call sum once with args 10 and 20", () => {
    // Arrange
    // Act
    myCalc.sum(10, 20);
    sinon.assert.calledOnce(spy); //sinon assertion
    // Assert
    sinon.assert.calledWith(spy, 10, 20);
  });
});

describe("spy calculator property getter and setter tests", () => {
  let spy;
  beforeEach(() => {
    spy = sinon.spy(myCalc, "calc", ["get", "set"]);
  });
  afterEach(() => {
    spy.restore();
  });
  it("myCalc - getter and setter test", () => {
    expect(myCalc.calc).to.be.equal("Casio");
    sinon.assert.calledOnce(spy.get);
    // Act
    myCalc.calc = "Genuine";
    // Assert
    sinon.assert.calledOnce(spy.set);
    expect(myCalc.calc).to.be.equal("Genuine");
  });
});
