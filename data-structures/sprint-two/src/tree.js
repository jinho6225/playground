var Tree = function (value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = []; // fix me
  extend(newTree, treeMethods);
  return newTree;
};

function extend(obj1, obj2) {
  for (let key in obj2) {
    obj1[key] = obj2[key];
  }
}

var treeMethods = {};

treeMethods.addChild = function (value) {
  let node = Tree(value);
  this.children.push(node);
};

treeMethods.contains = function (target) {
  let flag = false;
  function helper(obj) {
    if (obj.children.length === 0) return;
    for (let i = 0; i < obj.children.length; i++) {
      if (obj.children[i].value === target) {
        flag = true;
        return;
      }
      helper(obj.children[i]);
    }
  }
  helper(this);
  return flag;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
