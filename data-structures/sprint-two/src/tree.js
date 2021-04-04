var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = [];  // fix me

  extend(newTree, treeMethods);
  return newTree;
};

var extend = function(to, from) {
  for (var key in from) {
    to[key] = from[key];
  }
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  let node = Tree(value)
  this.children.push(node)
};

treeMethods.contains = function(target) {
  console.log(this, 'this')
  
};




/*
 * Complexity: What is the time complexity of the above functions?
 */
