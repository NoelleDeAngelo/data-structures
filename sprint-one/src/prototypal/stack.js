// Hey! Rewrite in the new style. Your code will wind up looking very similar,
// but try not not reference your old code in writing the new style.

var Stack = function() {
  var someStack = Object.create(stackMethods);
  someStack.storage = {};
  someStack.count = 0;
  return someStack;
};

var stackMethods = {};


stackMethods.push = function (value) {
  this.storage[this.count] = value;
  this.count++;
};

stackMethods.pop = function () {
  var popped = this.storage[this.count - 1];
  if (this.count > 0) {
    this.count -= 1;
  }
  return popped;
};

stackMethods.size = function () {
  return this.count;
};


