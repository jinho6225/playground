/**
 * JavaScript Engine
 *
 * javascript file -> javascript engine -> computer
 * javascript engine read javascript file and tell to computer to do something based on javascript file
 *
 * V8, SpiderMonkey, Chakra, etc...
 * V8 by google (in order to make browser to perform better(fast))
 *
 * who created the first Javascript Engine
 * Brendan Eich - early version spider monkey
 *
 * V8 - chrome, node.js - it's famouse engine
 *
 * javascript file -> parse -> AST -> interpreter -> profiler -> compiler -> optimized code -> 101010100011100 like that
 *                                      ->  bytecode
 * call stack / memory heap
 *
 * List of ECMAScript engines - wikipedia
 *
 */

/**
 * interpreter and compiler
 *
 * compiler take the code and make them to lower level language such as machine code
 *
 * High Level Languate      -    Bytecode   -    Machine code
 * javascript                    V8 bnytecode    x86_64 machine code
 *
 * Babel + TypeScript
 * Babel is a Javascript compiler that takes your modern JS code and returns browser compatible JS (older JS code).
 * Typescript is a superset of Javascript that compiles down to Javascript.
 *
 */

/**
 * c++ code compiled and make .exe file
 */

/**
 * Is Javascript an interpreted language?
 * yes, but, depends on how we implement this
 *
 */

/**
 * eval()
 * arguments
 * for in
 * with
 * delete
 * Hidden classes
 * Inline caching
 */

// inline caching
function findUser(user) {
  return `found ${user.firstName} ${user.lastName}`;
}
const userData = {
  firstName: "Johnson",
  lastName: "Junior",
};

findUser(userData);

("found Johnson Junior");

// hidden classes
function Animal(x, y) {
  this.x = x;
  this.y = y;
}

const obj1 = new Animal(1, 2);
const obj2 = new Animal(3, 4);

delete obj1.x;

/**
 * Why not just use macine code from the beginning?
 *
 *
 * WebAssembly (WA)
 *
 */

//Call stack + Meomory Heap
const number = 610; //allocate memory for number
const string = "some text"; //allocate memory for a string
const human = {
  //allocate memory for an object... and it's values.
  first: "Myung",
  last: "Jinho",
};

function subtractTwo(num) {
  return num - 2;
}

function calculate() {
  const sumTotal = 4 + 5;
  return subtractTwo(sumTotal);
}

//subtractTwo()
//calculate()
//global excution context
//Callstack

/**
 * Stack Overflow
 */
// function inception() {
//   inception();
// }
// recursion

/**
 * Garbage Collection
 *
 * Garbage Collected Language
 * automatically, collect garbage
 * only useful data remain
 *
 * prevent memory leaks
 *
 * low level language C, we need to collect garbage (we control)
 *
 * JavaScript Garbage Collect
 * Mark & Sweep
 */

//Memory Leak

//Global Variable
var a = 1;
var b = 1;
var c = 1;

//Event Listeners

// var element = document.getElementById("button");
// element.addEventListener("click", onClick);

//we need to create removeEventListener in order to avoid memory leak

//setInterval
setInterval(() => {
  //referencing objects....
});

//memory is limited
//stack overflow, memory leaks

/**
 * JavaScript is Single thread language
 * one call stack
 *
 * what problems do you see with synchronouse code?
 *
 * JavaScript Runtime
 * -    JavaScript is Single thread programming language
 *
 * -    Asynchronouse
 */
console.log("1");
setTimeout(() => {
  console.log("2"), 1000;
});
console.log("3");

/**
 * Node.js
 * built by C++
 * Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine.
 *
 */
