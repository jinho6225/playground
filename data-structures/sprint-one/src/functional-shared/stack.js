var Stack = function () {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var someInstance = {};
  someInstance.storage = {};
  someInstance.count = 0;
  extend(someInstance, stackMethods);
  return someInstance;
};

var extend = function (obj1, obj2) {
  for (let key in obj2) {
    obj1[key] = obj2[key];
  }
};

var stackMethods = {
  push: function (value) {
    this.storage[++this.count] = value;
  },
  pop: function () {
    if (this.count > 0) {
      let lastEl = this.storage[this.count];
      delete this.storage[this.count];
      this.count--;
      return lastEl;
    }
  },
  size: function () {
    return this.count;
  },
};
