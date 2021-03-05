var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values

  var storage = {};
  var endOfQueue = 0;
  var frontOfQueue = 0;
  // Implement the methods below

  someInstance.enqueue = function(value) {
    endOfQueue++;
    storage[endOfQueue] = value;
    //key:value
    // [{1: some value}]
    // obj.key == value
    // obj.1 = value
  };

  someInstance.dequeue = function() {
    if(someInstance.size() === 0){
      return;
    } else {

      frontOfQueue++;
      var result = storage[frontOfQueue];
      delete storage[frontOfQueue];
      return result;
      // (last item - size) + 1 = [0+ 1] = 1
      // delete obj.1 => removes our first key property

    }
  };

  someInstance.size = function() {
    return endOfQueue - frontOfQueue;
  };

  return someInstance;
};
