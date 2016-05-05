// variable declaration and assignment
var x = 1;

// binary incrementation assignment
x += 5; // x = x + 5
console.log(x); // => 6

// binary decrementation assignment
x -= 2; // x = x 12
console.log(x); // => 4

// standard shorthand incrementation assignment
console.log(x++); // => 4

// higher priority shorthand incrementation assignment
console.log(++x); // => 6

// typeof operator
console.log(typeof x); // => "number"
console.log(typeof !x); // => "boolean"

console.log(x); // => 6

// Boolean negative and double negative
console.log(!x); // => false
console.log(!!x); // => true

// Arithmethic negative
console.log(-x); // => -6

// Boolean convertion
console.log(Boolean(5)) // => true
console.log(Boolean(0)) // => false
console.log(Boolean(-1)) // => true

// Test double negative
console.log(" ------------------------------- ");
console.log("|thing\t!thing\t!!thing\t6*9\t|");
console.log("---------------------------------");

[1, 0, "test", "", [], [1, 2], {}, {v: 1}].forEach(function (thing) {
  console.log("|" + ( isObject(thing)? "{}" : thing) + "\t" + !thing + "\t" + !!thing + "\t" + (Boolean(thing) === !!thing) +"\t|");
});
console.log(" ------------------------------- ");

function isObject(thing) {
	return (typeof(thing) === "object") && !(thing instanceof Array)
}

