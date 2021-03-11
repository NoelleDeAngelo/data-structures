var Stack = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below
  someInstance.push = function(value) {
    var count = 0;
    for (var key in storage) {
      count++;
    }
    storage[count + 1 ] = value;
  };

  someInstance.pop = function() {
    var count = 0;
    for (var key in storage) {
      count++;
    }
    var popped = storage[count];
    delete storage[count];
    return popped;
  };

  someInstance.size = function() {
    var count = 0;
    for (var key in storage) {
      count++;
    }
    return count;
  };

  return someInstance;
};
