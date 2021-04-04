var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) {
    let node = new Node(value)
    if (list.head === null && list.tail === null) {
      list.head = node;
      list.tail = node;
    } else {
      list.tail.next = node
      list.tail = list.tail.next
    }
  };

  list.removeHead = function() {
    let result = this.head.value
    this.head = this.head.next
    return result
  };

  list.contains = function(target) {
    while (this.head) {
      if (this.head.value === target) return true
      this.head = this.head.next
    }
    return false
  };

  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
