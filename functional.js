#!/usr/bin/env node

var arr = [1,2,3,4,5,6,7,8,9,10];
var newarr = arr.filter(function(item) {
    return item % 2 === 0
});

console.log(newarr);
