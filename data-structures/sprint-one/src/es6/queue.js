class Queue {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.storage = {};
    this.start = 0;
    this.end = 0;
  }

  enqueue(value) {
    this.storage[this.end++] = value;
  }

  dequeue() {
    if (this.start < this.end) {
      let first = this.storage[this.start];
      this.start++;
      return first;
    }
  }

  size() {
    return this.end - this.start;
  }
}
