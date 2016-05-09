function Bucket(capacity) {
  "use strict";
  
  var _maxCapacity = capacity;
  var _currentCapacity = 0;     /* these variables (object properties) are hidden 
                                   from the outer world. That is why choose to type
                                   them with underscore */
  
  /* 
     "current" and "capacity" are accessor functions!
     
     They will only let us get the value of the hidden
     variables but not to modify them.
     
     Hiding properties of an object is called Encapsulation!
  */
  this.current = function () {
    return _currentCapacity;
  };
  this.capacity = function () {
    return _maxCapacity;
  };
  
  /* 
     "fill" and "empty" are modifier functions!
     
     They will only let us change the value of the 
     "current" property but with proper restrictions.
     For example - we won't be aloowed to empty more
     than the current capacity and not to fill more
     than the max capacity.
     
     Restricting the modification of an object property
     is also called Encapsulation!
  */
  this.fill = function (quantity) {
    quantity = quantity || (this.capacity() - this.current()); // if no quantity was passed, we'll just fill it up
    var total = quantity + this.current();
    
    if (total > this.capacity) {
      throw new Error("That's not possible!");
    }
    else {
      _currentCapacity = total;
    }
  };
  this.empty = function (quantity) {
    quantity = quantity || this.current(); // if no quantity was passed, we'll just empty it down
    var leftover = this.current() - quantity;
    
    if (leftover < 0) {
      throw new Error("That's not possible!");
    }
    else {
      _currentCapacity = leftover;
    }
  };
}

Bucket.prototype.toString = function () {
  return "Ei, I have " + this.current() + " gallons in me out of " + this.capacity() + " possible.";
};
Bucket.prototype.transferIn = function (other) {
  /* we can transfer the liquid from the other bucket only if it's less 
     than the available space left in our bucket */
  var quantityToTransfer = Math.min(this.capacity() - this.current(), other.current());
  this.fill(quantityToTransfer);
  other.empty(quantityToTransfer);
};
Bucket.prototype.transferOut = function (other) {
  other.transferIn(this);
};
