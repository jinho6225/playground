var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var stack = {};
  stack.count = 0;
  stack.storage = {}
  extend(stack, stackMethods);
  return stack;
};

var extend = function(to, from) {
  for (var key in from) {
    to[key] = from[key];
  }
};

var stackMethods = {};
stackMethods.size = function() {
  return this.count
}
stackMethods.push = function(value) {
  this.storage[++this.count] = value
}
stackMethods.pop = function() {
  let result =  this.storage[this.count]
  delete this.storage[this.count]
  if (this.count > 0) {
    this.count--
  }
  return result

}
