function strict(list) {
	"use strict";
	
	var total = 0;
	var i, size;
	
	for(i=0, size=list.length; i<size; i++) {
		tatal = total + list[i];
	}
	return tatal;
}

function fn(list) {
	var total = 0;
	var i, size;
	
	for(i=0, size=list.length; i<size; i++) {
		tatal = total + list[i];
	}
	return tatal;
}

console.log('no strict result:', fn([2, 3, 4]));
console.log('type of total:', typeof total);
console.log('type of tatal:', typeof tatal);
console.log('window.tatal:', window.tatal);
delete window.tatal;
console.log('strict:', strict([2, 3, 4]));