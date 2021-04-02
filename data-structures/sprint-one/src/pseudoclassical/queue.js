var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.count = 0;
  this.deCount = 0
  this.storage = {};
};

Queue.prototype.size = function() {
    return this.count - this.deCount
};

Queue.prototype.enqueue = function(val) {
  this.storage[++this.count] = val
};

Queue.prototype.dequeue = function() {
  if (this.count > this.deCount) {
    this.deCount++
  }
  let result = this.storage[this.deCount]
  return result
};


var queue = new Queue();


