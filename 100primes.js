#!/usr/bin/env node

var isprime = function (n) {
	 if (isNaN(n) || !isFinite(n) || n%1 || n<2) return false; 
	  var m=Math.sqrt(n);
	   for (var i=2;i<=m;i++) if (n%i==0) return false;
	    return true;
}

var outarr=[];
var count = 0;

for (var i=2;i<=1000;i++) {
	if (isprime(i)){
		outarr.push(i);
		count = count + 1;
		if (count > 100) break;
	}
}

console.log(outarr.join(", "));
