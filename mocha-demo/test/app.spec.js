const { add, sub } = require("../src/app");
const expect = require("chai").expect;

// BDD
describe("Suite 1", () => {
  afterEach(() => {
    console.log("afterEach");
  });
  beforeEach(() => {
    console.log("beforeEach");
  });
  after(() => {
    console.log("after");
  });
  before(() => {
    console.log("before");
  });

  it("add(2,3) should return 5", () => {
    console.log("it");
  });

  it("two", () => {
    console.log("it two");
  });
});

/**
 * 
Suite 1
before
beforeEach
it
    ✓ add(2,3) should return 5
afterEach
beforeEach
it two
    ✓ two
afterEach
after
 */

// TDD

// suite("Suite 2", () => {
//   suiteSetup(() => {
//     console.log("suiteSetup");
//   });
//   suiteTeardown(() => {
//     console.log("suiteTeardown");
//   });
//   setup(() => {
//     console.log("setup");
//   });
//   teardown(() => {
//     console.log("teardown");
//   });
//   test("add(3,3) should return 6", () => {
//     console.log("test");
//   });

//   test("add(1,3) should return 4", () => {
//     console.log("test2");
//   });
// });

/**
 * 
  Suite 2
suiteSetup
setup
test
    ✓ add(3,3) should return 6
teardown
setup
test2
    ✓ add(1,3) should return 4
teardown
suiteTeardown
 */
