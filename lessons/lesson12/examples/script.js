/* A list of names */
var list = ['Ivan', 'Nikola', 'Andrey', 'Mitko'];

/* Let's make another list, that contains the lenghts of the names in our list */
var result1 = [
	list[0].length,
	list[1].length,
	list[2].length,
	list[3].length
];

// here we output the result1 in the console:
console.log(result1);
// => [ 4, 6, 6, 5 ]

/* Now let's make a string out of all the first characters in the names list */
var result2 = list[0].charAt(0) +
  list[1].charAt(0) +
  list[2].charAt(0) +
  list[3].charAt(0);

// here we output the result2 in the console:
console.log(result2);
// => 'INAM'

/* Count the oveall characters in all the names in the list */
var result3 = result1[0] + result1[1] + result1[2] + result1[3];

// here we output the result3 in the console:
console.log(result3);
// => 21

/* Now let's make a new list of names */
var names = ['Ivan', 'Nikola', 'Andrey', 'Mitko', 'Peter'];

/* We can create a function that will use a loop to 
   iterate over all the names in the list and thus 
   it will calculate the overall charachters in all
   the names. It will also return the result value. */
function calcTotal() {
  var index = 0,
    total = 0;

  // this loop will add the length of each name from the names list to the total variable 
  while (index < names.length) {
    total = total + names[index].length;
    index = index + 1;
  }

  return total;
}

// Here we call the function:
calcTotal();

// here we output the result of the function in the console:
console.log(calcTotal());
// => 26

// We can add a new name to the list:
names[names.length] = "Gosho";

// The function will calculate the proper value again
console.log(names);
console.log(calcTotal());
// => 31