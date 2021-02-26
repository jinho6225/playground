var Queue = function () {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  this.storage = {};
  this.start = 0;
  this.end = 0;
};

Queue.prototype.enqueue = function (value) {
  this.storage[this.end++] = value;
};

Queue.prototype.dequeue = function () {
  if (this.start < this.end) {
    let first = this.storage[this.start];
    this.start++;
    return first;
  }
};

Queue.prototype.size = function () {
  return this.end - this.start;
};
