

// Instantiate a new graph
var Graph = function() {
  var graph = Object.create(Graph.prototype);
  graph.storage = {};
  return graph;
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(value) {
  var node = {};
  node.value = value;
  node.relations = [];
  this.storage[value] = node;
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(value) {
  if (this.storage[value] === undefined) {
    return false;
  }
  return true;
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(nodeToBeDeleted) {
  var nodes = this.storage;
  for ( var i = 0; i < nodes[nodeToBeDeleted].relations.length; i++) {
    var currentRelation = nodes[nodeToBeDeleted].relations[i];
    for (var j = 0; j < nodes[currentRelation].relations.length; j++ ) {
      if (nodes[currentRelation].relations[j] === nodeToBeDeleted) {
        nodes[currentRelation].relations.splice(j, 1);
        break;
      }
    }
  }
  delete this.storage[nodeToBeDeleted];

};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  var nodes = this.storage;
  for (var i = 0; i < nodes[fromNode].relations.length; i++) {
    if (nodes[fromNode].relations[i] === toNode) {
      return true;
    }
  }
  return false;
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  var nodes = this.storage;
  nodes[fromNode].relations.push(toNode);
  nodes[toNode].relations.push(fromNode);

};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  var nodes = this.storage;
  console.log('fromNode rel ', nodes[fromNode].relations);
  console.log('toNode rel ', nodes[toNode].relations);
  for (var i = 0; i < nodes[fromNode].relations.length; i++) {
    var currentRelation = nodes[fromNode].relations[i];
    if (currentRelation === toNode) {
      nodes[fromNode].relations.splice(i, 1);
    }
  }
  for (var i = 0; i < nodes[toNode].relations.length; i++) {
    var currentRelation = nodes[toNode].relations[i];
    if (currentRelation === fromNode) {
      nodes[toNode].relations.splice(i, 1);
    }
  }
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


