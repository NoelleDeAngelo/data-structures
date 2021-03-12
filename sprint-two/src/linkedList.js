
var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;
  list.count = 0;

  list.addToTail = function(value) {
    var addedNode = Node(value);
    list.tail = addedNode;
    if (list.head === null) {
      list.head = addedNode;
    } else {
      currentNode = list.head;
      while (currentNode.next) {
        currentNode = currentNode.next;
      }
      currentNode.next = addedNode;
    }

  };

  list.removeHead = function() {
    var removed = list.head.value;
    list.head = list.head.next;
    return removed;

  };

  list.contains = function(target) {
    currentNode = list.head;
    while (currentNode.next) {
      if (currentNode.value === target) {
        return true;
      }
      currentNode = currentNode.next;
    }
    if (currentNode.value === target ) {
      return true;
    }
    return false;
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
