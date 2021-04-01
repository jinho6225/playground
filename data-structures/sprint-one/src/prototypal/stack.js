var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var stack = Object.create(stackMethods);
  stack.count = 0;
  stack.storage = {};
  return stack;
};

var stackMethods = {};

stackMethods.size = function() {
  return this.count
};
stackMethods.push = function(val) {
  this.storage[++this.count] = val
};
stackMethods.pop = function() {
  let result = this.storage[this.count]
  delete this.storage[this.count]
  if (this.count > 0) {
    this.count--
  }
  return result
};