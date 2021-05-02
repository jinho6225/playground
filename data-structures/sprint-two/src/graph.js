//Edge List
const graph = [[0,2], [2,3], [2,1], [1,3]]
//Adjacent List
const graph2 = [[2], [2,3], [0,1,3], [1,2]]
//Adjacent Matrix
const graph3 = {
    0:[0,0,1,0],
    1:[0,0,1,1],
    2:[1,1,0,1],
    3:[0,1,1,0]
}
/**
    2   -   0
  /   \ 
1  -   3
 */


// Instantiate a new graph
var Graph = function() {
    this.adjacentBox = {}
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
    this.adjacentBox[node] = []
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {    
    return Object.keys(this.adjacentBox).includes(String(node))
};

// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
    for (let i = 0; i < this.adjacentBox[node].length; i++) {
        let idx = this.adjacentBox[this.adjacentBox[node][i]].indexOf(node)
        this.adjacentBox[this.adjacentBox[node][i]].splice(idx, 1)
    }
    delete this.adjacentBox[node]
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
    return this.adjacentBox[fromNode].includes(toNode)
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
    this.adjacentBox[fromNode].push(toNode)
    this.adjacentBox[toNode].push(fromNode)
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
    let idx1 = this.adjacentBox[fromNode].indexOf(toNode)
    this.adjacentBox[fromNode].splice(idx1, 1)
    let idx2 = this.adjacentBox[toNode].indexOf(fromNode)
    this.adjacentBox[toNode].splice(idx2, 1)    
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
    Object.keys(this.adjacentBox).forEach(val => cb(val))
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


