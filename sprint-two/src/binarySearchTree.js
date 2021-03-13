

var BinarySearchTree = function(value) {
  this.left = null;
  this.right = null;
  this.value = value;
};

//create node to be placed
//look at value of current node
//if value is less than current nodes val
// if curent nodes left value, if it is empty
//insert node
//else current node becomes node and start steps over
// val is more than current node val
// if curent nodes right value, if it is empty
//insert node
//else current node becomes node and start steps over

BinarySearchTree.prototype.insert = function(value) {
  var nodeToAdd = {};
  nodeToAdd.value = value;
  nodeToAdd.left = null;
  nodeToAdd.right = null;
  var currentNode = this;
  var checkAndAddNode = function(currentNode) {
    if (value < currentNode.value) {
      if (currentNode.left === null) {
        currentNode.left = nodeToAdd;
        return;
      }
      checkAndAddNode(currentNode.left);
    } else {
      if (currentNode.right === null) {
        currentNode.right = nodeToAdd;
        return;
      }
      checkAndAddNode(currentNode.right);
    }
  };
  checkAndAddNode(currentNode);

};



// look at value of first node
// if node value same as target
//return true
// else if target is less than node value and node left val exists
// start over with node as node.left
// else if target is more than node value and node right val exists
// start over with node.right
// else return false

BinarySearchTree.prototype.contains = function(target) {
  var currentNode = this;
  var checkForValue = function(currentNode) {
    if (currentNode.value === target) {
      return true;
    } else if (target < currentNode.value && currentNode.left !== null) {
      return checkForValue(curentNode.left);
    } else if (target > currentNode.value && currentNode.right !== null) {
      return checkForValue(currentNode.right);
    } else {
      return false;
    }
  };
  return checkForValue(currentNode);
};

BinarySearchTree.prototype.depthFirstLog = function() {

};




/*
 * Complexity: What is the time complexity of the above functions?
 */
