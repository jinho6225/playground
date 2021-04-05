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
  console.log(this.children, 'thisChildren')
  //there are two way?!
  let queue = []
  if (this.children.length > 0) {
    for (let i = 0; i < this.children.length; i++) {
      queue.push(this.children[i])
    }
  }

  while (queue.length > 0) {
    console.log(queue, 'queue')
    let cur = queue.shift()
    if (cur.value === target) return true
    console.log(cur, 'cur')
    if (cur.children.length > 0) {
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
