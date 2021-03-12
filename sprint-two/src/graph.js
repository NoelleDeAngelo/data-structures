

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
Graph.prototype.removeNode = function(value) {
  if (this.storage[value] !== undefined) {
    delete this.storage[value];
  }
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
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


