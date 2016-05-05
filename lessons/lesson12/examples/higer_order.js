var numberArray = [69, 47, 45, 52, 27, 58, 47];
var stringArray = ['David', 'Thom', 'Matt', 'Tracy', 'Jim', 'Nick'];

function find(array, elementValue) {
	return array.indexOf(elementValue) >= 0;
}

console.log("find", '69:', find(numberArray, 69));
console.log("find", '9:', find(numberArray, 9));

console.log("find", 'Thom:', find(stringArray, 'Thom'));
console.log("find", 'Derren:', find(stringArray, 'Derren'));

function mapLength(array) {
	var resultArray = [];
	
	for (var i=0; i<array.length; i++) {
		if (typeof array[i] === 'string') {
			resultArray[i] = array[i].length;
		} else {
			resultArray[i] = array[i].toString().length;
		}
	}
	
	return resultArray;
}

function reduceAdd(array) {
	var result = 0;
	
	for (var i=0; i<array.length; i++) {
		result += array[i];
	}
	
	return result;
}

console.log("\n>>>>>>> HOF! >.< <<<<<<<\n");

// a generic isolated and independent higher order function
function reduce(callback, array, initialValue) {
	var result = initialValue;
	for (var i=0; i<array.length; i++) {
		result = callback(array[i], result);
	}
	return result;
}

function add(a, b) {
	if (typeof a === 'number' && typeof b === 'number') {
		return a + b;
	}
	else {
		return a + "\n " + b;
	}
}

console.log("\n1\n", reduce(add, numberArray, 0));
console.log("\n2\n", reduce(add, stringArray, ""));

// the same with anonymous functions
console.log("\n3\n", reduce(function (a, b) { return a + b }, numberArray, 0));
console.log("\n4\n", reduce(function (a, b) { return a + "\n " + b }, stringArray, ""));
