// create the variables and initialize the x variable
var y, counter, x = 5;

// initialize y and counter
y = 0;
counter = 0;

// implement the while loop using the shorthand incrementation
while (counter++ < 10) {
	y += x;
}

// check the while result
console.log('while loop: ', 'x =', x, ', y =', y);

// implement the while loop using the shorthand incrementation + variable initialization (smart, a? :})
for (y = 0, counter = 0; counter < 10; counter++) {
	y += x;
}

// check the for result
console.log('for loop:', 'x =', x, ', y =', y);

// call the multiply function before it was declared (it's ok!)
console.log('multyply(10, 10):', multiply(10, 10));

// declare the multiply function - a pure function with no external dependencies
function multiply(a, b) {
  // create the variables (counter variable here masks the counter variable from the outer scope)
	var result, counter;
  
  // execute same old dam for :)
	for (result = 0, counter = 0; counter < a; counter++) {
		result += b;
	}
	// return the nicely formed result
	return result;
}
