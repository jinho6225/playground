const expect = require("chai").expect;

expect(true).to.be.true;

function titleCase(title) {
  let words = title.split(" ");
  let titleCasedWords = words.map((word) => {
    return word[0].toUpperCase() + word.substring(1);
  });
  return titleCasedWords.join(" ");
}

expect(titleCase("the greate mouse detective")).to.be.a("string");
expect(titleCase("a")).to.equal("A");
expect(titleCase("detective")).to.equal("Detective");
expect(titleCase("the greate mouse detective")).to.equal(
  "The Greate Mouse Detective"
);
