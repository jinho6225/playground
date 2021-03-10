var Set = function() {
  var set = Object.create(setPrototype);
  set._storage = {}; // fix me
  return set;
};

var setPrototype = {};

setPrototype.add = function(item) {
  if (item in this._storage) {
    return 
  } else {
    this._storage[item] = true
  }
};

setPrototype.contains = function(item) {
  if (item in this._storage) return true
  return false
};

setPrototype.remove = function(item) {
  if (item in this._storage) {
    delete this._storage[item]
  }
  
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
