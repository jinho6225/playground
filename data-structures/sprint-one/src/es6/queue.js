class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.count = 0;
    this.deCount = 0
    this.storage = {};
  }

  size() {
    return this.count - this.deCount
  };

  enqueue(val) {
    this.storage[++this.count] = val
  };

  dequeue() {
    if (this.count > this.deCount) {
      this.deCount++
    }
    let result = this.storage[this.deCount]
    return result
  };

}
