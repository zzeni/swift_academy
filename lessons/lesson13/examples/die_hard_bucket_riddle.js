/* 
      Task
  ------------
  
  You've got to defuse a bomb by placing exactly 4 gallons of water on a sensor.
  The problem is, you only have a 5 gallon jug and a 3 gallon jug on hand! 
  
  This classic riddle, made famous in Die Hard 3, may seem impossible without a 
  measuring cup, but it is actually remarkably simple.

*/

var b1 = new Bucket(3);

console.log('b1: ', b1.toString());

b1.fill();

console.log('b1: ', b1.toString());

var b2 = new Bucket(5);

console.log('b2: ', b2.toString());

console.log('Transferring b1 to b2...');

b2.transferIn(b1);

console.log('b1: ', b1.toString());
console.log('b2: ', b2.toString());

b1.fill();

console.log('b1: ', b1.toString());

console.log('Transferring b1 to b2...');

b2.transferIn(b1);

console.log('b1: ', b1.toString());
console.log('b2: ', b2.toString());

b2.empty();

console.log('b2: ', b2.toString());

console.log('Transferring b1 to b2...');

b2.transferIn(b1);

console.log('b1: ', b1.toString());
console.log('b2: ', b2.toString());

b1.fill();

console.log('b1: ', b1.toString());

console.log('Transferring b1 to b2...');

b2.transferIn(b1);

console.log('b1: ', b1.toString());
console.log('b2: ', b2.toString());
