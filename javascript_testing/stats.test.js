const stats = require("./stats");

describe("stats", () => {
  it("gets maximum value", () => {
    expect(stats.max([1, 2, 3, 4, 5, 6])).toBe(6);
  });

  it("gets minimum value", () => {
    expect(stats.min([1, 2, 3, 4, 5, 6])).toBe(1);
  });

  it("gets avg value", () => {
    expect(stats.avg([1, 2, 3, 4, 5])).toBe(3);
  });
});
