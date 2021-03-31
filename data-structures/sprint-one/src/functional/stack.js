var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  let count = 0

  // Implement the methods below
  someInstance.push = function(value) {
    storage[++count] = value
  };

  someInstance.pop = function() {
    let result = storage[count]
    delete storage[count]
    if (count > 0) {
      count--
    }
    return result
  };

  someInstance.size = function() {
    return count
  };

  return someInstance;
};
