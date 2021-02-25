var Queue = function () {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {};
  someInstance.storage = {};
  someInstance.start = 0;
  someInstance.end = 0;
  extend(someInstance, queueMethods);
  return someInstance;
};

var extend = function (obj1, obj2) {
  for (let key in obj2) {
    obj1[key] = obj2[key];
  }
};

var queueMethods = {
  enqueue(value) {
    this.storage[this.end++] = value;
  },
  dequeue() {
    if (this.start < this.end) {
      let first = this.storage[this.start];
      this.start++;
      return first;
    }
  },
  size() {
    return this.end - this.start;
  },
};
