var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var count = 0;

  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[count] = value;
    count++;
  };

  someInstance.dequeue = function() {
    var dequeued = storage[0];
    if (count > 0) {
      count -= 1;
    }
    return dequeued;
  };

  someInstance.size = function() {
    return count;
  };

  return someInstance;
};
