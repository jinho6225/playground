class Stack {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
  constructor() {
    this.count = 0
    this.storage = {}
  }

  size() {
    return this.count
  }
  push(val) {
    this.storage[++this.count] = val
  }
  pop() {
    let result = this.storage[this.count]
    delete this.storage[this.count]
    if (this.count > 0) {
      this.count--
    }
    return result
  }
}