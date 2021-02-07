const expect = require("chai").expect;
const { sum, sumOf } = require("../sum");

// Test sutie
describe("sum", () => {
  // Test spec (unit test)
  it("calculates 1 + 2", () => {
    expect(sum(1, 2)).to.equal(3);
  });
  it("calculates all elements from the array", () => {
    let array = [1, 2, 3, 4, 5, 6, 7];
    expect(sumOf(array)).to.equal(28);
  });
});
