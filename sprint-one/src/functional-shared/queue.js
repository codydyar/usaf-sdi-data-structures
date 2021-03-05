var Queue = function() {
  var queue = {
      queueHome: {},
      endOfQueue: 0,
      frontOfQueue: 0
  };

  extend(queue, queueMethods);
  return queue;

};

var extend = function(addToQueue, takeFromQueue){
  for (var key in takeFromQueue){
    addToQueue[key] = takeFromQueue[key]
  }
};

var queueMethods = {

  enqueue: function(value){
    this.endOfQueue++;
    this.queueHome[this.endOfQueue] = value;
  },


  dequeue: function() {
    if (this.size() === 0) {
     return;
    } else {

      frontOfQueue++;
      var result = this.queueHome[this.frontOfQueue - 1];
      delete this.queueHome[this.frontOfQueue - 1];
      return result;

    }
  },

  size: function() {
   return endOfQueue - frontOfQueue;
  }

};