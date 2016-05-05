// if--else-if--else example
function toBeOrNotToBe(dynamite, spark) {
  if ((typeof spark !== "string") || (['weak', 'strong'].indexOf(spark) < 0)) {
    return "Dude, you can't light up a dinamite with a " + spark + " spark!";
  }

  if (dynamite < 200) {
    return dynamite + " only ?! You need to try harder, dude!..";
  }
  else if (spark === "weak") {
  	return "Dude, you can't light up a dinamite with a " + spark + " spark!";
  }
  else {
    return "ka-Boom!!";
  }
}

console.log("\n1\n", toBeOrNotToBe(500)); // => "Dude, you can't light up a dinamite with a undefined spark!"
console.log("\n2\n", toBeOrNotToBe(100, "strong")); // => "100 only ?! You need to try harder, dude!.."
console.log("\n3\n", toBeOrNotToBe(400, "weak")); // => "Dude, you can't light up a dinamite with a weak spark!"
console.log("\n4\n", toBeOrNotToBe(300, "strong")); // => "ka-Boom!!"


// ternary operator example
function tryTheHolyTrinary(value) {
	return (value > 50) ? "success!" : "errr..";
}

console.log("\nBehold! tryTheHolyTrinary (or what's my reaction to different test scores):\n")

var counter = 0;
while (counter++ < 10) {
	var val = Math.round(Math.random() * 100);
	console.log(val, tryTheHolyTrinary(val));
}