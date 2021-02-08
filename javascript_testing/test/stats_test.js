const expect = require("chai").expect;
const { max, min, avg } = require("../stats");

describe("stats", () => {
  it("max", () => {
    expect(max([1, 2, 3, 4, 5])).to.equal(5);
  });
  it("min", () => {
    expect(min([1, 2, 3, 4, 5])).to.equal(1);
  });
  it("avg", () => {
    expect(avg([1, 2, 3, 4, 5])).to.equal(3);
  });
});
