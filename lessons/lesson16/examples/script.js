
  "use strict";

  var myVar1 = "My var 1";

  localContext(5);


  function localContext(myVar3) {
    var myVar2 = "My var 2";
    console.log("In the 'if' context:");
    console.log(myVar1);
    console.log(myVar2);
    console.log(myVar3);

    function innerFunc(x) {
      console.log("this is x: " + x);
      console.log("my var 1 again: " + myVar1);

    }

    innerFunc(1);
    //  console.log("this is x out of the context: " + x);
  }

  //innerFunc(3);

  console.log("In the global context:");
  console.log(myVar1);
  //console.log(myVar2);
  //console.log(myVar3);
