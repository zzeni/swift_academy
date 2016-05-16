var search = location.search;

console.log(search); // => "?username=bla&email=ae%40asef.awef"

/* remove the leading "?" */
search = search.substring(1, search.length)

console.log(search); // => "username=bla&email=ae%40asef.awef"

var queryArray = search.split("&");

console.log(queryArray); // => ["username=bla", "email=ae%40asef.awef"]

var result = {}; // => Object {}

queryArray.forEach(function (pairStr) {
  var pairArray = pairStr.split("=");
  /* Adds a new field to the result object with a field name: the first part of the pair and with a field value: the second part of the pair */
  result[pairArray[0]] = pairArray[1];
});

console.log(result); // => { username: "bla", email: "ae%40asef.awef" }

result["name"] = "Chuck Norris";

console.log(result); // => { username: "bla", email: "ae%40asef.awef", name: "Chuck Norris" }