var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  var queue = Object.create(queueMethods);
  queue.count = 0;
  queue.deCount = 0;
  queue.storage = {}
  return queue;
};

var queueMethods = {};

queueMethods.enqueue = function(value) {
this.storage[++this.count] = value
};

queueMethods.dequeue = function() {
if (this.count > this.deCount) {
  this.deCount++
}
let result = this.storage[this.deCount]
return result
};

queueMethods.size = function() {
return this.count - this.deCount
};

