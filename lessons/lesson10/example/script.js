function namesParser(array) {
  var result = "";
//  result += array[0].charAt(0);
//  result += array[1].charAt(0);
//  result += array[2].charAt(0);
//  result += array[3].charAt(0);

  var index = 0;

  while (index < array.length) {
    result += array[index].charAt(0);
    index += 1;
  }

//  for (var i=0; i<array.length; i+=1) {
//    result += array[i].charAt(0);
//  }

  return result;
}

var namesList = ["Iva", "Dani", "Eli", "Adi", "Leo"]; // "IDEAL"

console.log("The parsed result is: " + namesParser(namesList));

