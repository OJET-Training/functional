#!/usr/bin/env node

var arr = [1,2,3,4,5,6,7,8,9,10];
var newarr = [];

for (var i=0; i<arr.length; i++) {
    if (arr[i] % 2 === 0) {
        newarr.push(arr[i]);
    }
}

console.log(newarr);
