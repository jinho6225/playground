var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  let count = 0
  let deCount = 0

  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[++count] = value
  };

  someInstance.dequeue = function() {
    if (count > deCount) {
      deCount++
    }
    let result = storage[deCount]
    return result
  };

  someInstance.size = function() {
    return count - deCount
  };

  return someInstance;
};
