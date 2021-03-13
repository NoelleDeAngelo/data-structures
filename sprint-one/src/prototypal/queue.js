// Hey! Rewrite in the new style. Your code will wind up looking very similar,
// but try not not reference your old code in writing the new style.

var Queue = function() {
  var someQueue = Object.create(queueMethods);
  someQueue.storage = {};
  someQueue.count = 0;
  return someQueue;
};

var queueMethods = {};

queueMethods.enqueue = function (value) {
  this.storage[this.count] = value;
  this.count++;
};

queueMethods.dequeue = function () {
  var dequeued = this.storage[0];
  if (this.count > 0) {
    this.count -= 1;
  }
  for (var i = 0; i < this.count; i++) {
    this.storage[i] = this.storage[i + 1];
  }
  return dequeued;
};

queueMethods.size = function () {
  return this.count;
};



