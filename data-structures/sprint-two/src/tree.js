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
  let queue = []
  if (this.value === target) return true
  if (this.children.length) {
    for (let i = 0; i < this.children.length; i++) {
      queue.push(this.children[i])
    }
  }

  while (queue.length) {
    let cur = queue.shift()
    if (cur.value === target) return true
    if (cur.children.length) {
      for (let i = 0; i < cur.children.length; i++) {
        queue.push(cur.children[i])
      }
    }
  }
  return false
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
