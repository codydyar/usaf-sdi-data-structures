
var Stack = function() {
  var stack = {
      stackHome: {},
      stackLength: 0
  };

  extend(stack, stackMethods);
  return stack;

};

var extend = function(addToStack, takeFromStack){
  for (var key in takeFromStack){
    addToStack[key] = takeFromStack[key]
  }
};

var stackMethods = {

  push: function(value){
      this.stackHome[this.stackLength] = value;
      this.stackLength++;
  },


  pop: function() {
    if (this.size() > 0) {
      var result = this.stackHome[this.stackLength - 1];
      delete this.stackHome[this.stackLength - 1];
      this.stackLength--;
      return result;
    } else {
      return 0;
    }
  },

  size: function() {
   return this.stackLength;
  }

};


// var makeStack = createStack();
// makeStack.add(10);
// makeStack.add('youngins');
// makeStack.add('sisters');
// console.log(makeStack.stackHome);
// makeStack.remove();
// makeStack.remove();
// console.log(makeStack.stackHome);
// makeStack.remove();
// makeStack.remove();
// console.log(makeStack.stackHome);
// console.log(makeStack.remove());