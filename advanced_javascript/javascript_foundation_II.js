/**
 * Execution Context
 *
 * initially javascript engine create global execution context
 * whenever code is run on javascript, always going to be part of execution context
 *
 * Global Execution Context
 * -    Global Object (inside browser, global object is window) this === window True
 * -    this
 * Global Object(window or global) === this
 *
 * when code is run on JavaScript engine, global execution context is created
 * and when you run a function, a new execution context is added (function execution context)
 */

/**
 * Lexical Environment
 *
 * where you write someting
 * lexical mean at compile time
 * where is the code written
 * execution context tells you which lexical environment is currently running
 *
 * In JavaScript our lexical scope (available data + vaiables where the function was defined) determines our available variables. Not where the cunction is called (dynamic scope)
 *
 */

/**
 * Hoisting
 *
 * hoisting is the behavior of moving the variables or function declarations to the top of their respective environments during compilation
 *
 * function expression vs function declaration
 *
 * We have a few things that happen.
 * We have the global object and this object during the creation that gets assigned and then during the execution we run our code.
 * But it's important to remember that during this creation we also have this act of hoisting something that's quite unique to JavaScript where we move anytime we see the function or the VAR keywords as the first items on the line.
 * We allocate space for them in our heap to make sure that the JavaScript engine is ready for the execution.
 *
 * hoisting happens on every execution context
 */

/**
 * Function invocation
 * start with variable and assign the function
 * var canada = function() {
 *  console.log('cold')
 * }
 *
 * function expression
 *
 * function declaration
 * start function keyword
 * function india() {
 *  console.log('warm')
 * }
 *
 *
 * function invocation/call/execution
 * canada() or india()
 * invoke = parentheses ()
 *
 * Canada function well this function is defined at runtime when we actually run the function or call the function or execute the function or invoke the function.
 * That's when we define what this function does versus India where this function gets defined at parse time. That is when the compiler initially looks at the code and starts hoisting and allocating memory.
 *
 *
 *
 * When a function is invoked Well we create a new execution context on top of our global execution context and we get a few things.
 * We get the this keyword, but unlike the global execution context that gave us a global object that equals to this instead with a function invocation we get something called arguments and that's another keyword in JavaScript
 *
 */

function marray(person1, person2) {
  console.log(arguments);
  console.log(Array.from(arguments));
}

let object = {
  0: "a",
  1: "b",
  2: "c",
};
console.log(object);
console.log(Object.values(object));
console.log(Array.from(object));
marray("tim", "tina");
console.log(7 * 5);

/**
 * arguments - special object
 * Arguments is not defined because while arguments is only available to us when we create a new execution context with a function All right so we got the arguments object
 */

function marray2(...args) {
  console.log(args, "args");
  console.log(arguments, "arguments");
  console.log(Array.from(arguments), "Array.from(arguments)");
}
marray2("tim", "tina");

function something() {
  console.log(arguments, "arguments");
  arguments["name"] = "jinho";
  console.log(arguments, "arguments");
  this["name"] = "jinho";
  console.log(this, "this");
}
console.log(something());
