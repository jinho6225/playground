const { sum, sumOf } = require("./sum");

describe("sum", () => {
  it("calculates 1 + 2", () => {
    expect(sum(1, 2)).toBe(3);
  });
  it("calculates all elements from the array", () => {
    let array = [1, 2, 3, 4, 5, 6, 7];
    expect(sumOf(array)).toBe(28);
  });
});
