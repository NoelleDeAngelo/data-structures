
var Tree = function(value) {
  var newTree = {};
  newTree.value = value;
  _.extend(newTree, treeMethods);

  // your code here
  newTree.children = []; // fix me

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  this.children.push(Tree(value));

};

treeMethods.contains = function(target) {
  currentNode = this;
  if (currentNode.value === target) {
    return true;
  }
  var searchChildren = function (currentNode) {
    for (var i = 0; i < currentNode.children.length; i++) {
      var child = currentNode.children[i];
      if (child.value === target) {
        return true;
      }
      if (child.children.length > 0 ) {
        searchChildren(child);
      }
    }
  };
  return false;
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
