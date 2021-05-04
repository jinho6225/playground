var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = {}; // fix me
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  console.log(this, 'this', item)
  this._storage[item] = true
};

setPrototype.contains = function(item) {
  for (let key in this._storage) {
    if (item === key) {
      return true
    }
  }
  return false
};

setPrototype.remove = function(item) {
  for (let key in this._storage) {
    if (item === key) {
      delete this._storage[item]
    }
  }  
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
