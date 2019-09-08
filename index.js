'use strict';
console.log("\x1b[1m\x1b[37m");
console.log('Simple APP for calculation');

var num1 = 0;
var num2 = 0;
var operation = 0;

const argumentList = process.argv;
const addThese = argumentList.slice(2, argumentList.length);

num1 = addThese[0].toString().split(" "); 
num1 = num1.toString().split("="); 
console.log(Number(num1[1]));

num2 = addThese[1].toString().split(" "); 
num2 = num2.toString().split("="); 
console.log(Number(num2[1]));

operation = addThese[2].toString().split(" "); 
operation = operation.toString().split("="); 
console.log(String(operation[1]));

let len = addThese.length;

if(len === 0) {
	console.log('Please enter command line operations like <any interger> <any interger> <1-4>');
	console.log("Add, sub, mul and div");
	process.exit(1);
}
if (isNaN(num1[1])) {
    console.log('num1 is not integer number');
	process.exit(1);
}
if (isNaN(num2[1])) {
    console.log('num2 is not integer number');
	process.exit(1);
}
if (!isNaN(operation[1])) {
    console.log('operation is not integer number');
	process.exit(1);
}

console.log("num1 = " + num1[1]);
console.log("num2 = " + num2[1]);
console.log("your operation = " + operation[1]);
num1 = num1[1];
num2 = num2[1];
operation =operation[1];

switch(operation) {
  case 'sum':
    // code block
	var add = require('./sum');
	let sum = add.addition(num1, num2);
	console.log("Sum is = " + sum);
    break;
  case 'sub':
    // code block
	var sub = require('./diff');
	let diff = sub.subtraction(num1, num2);
	console.log("diff is = " + diff);
    break;
  case 'mul':
    // code block
	var mul = require('./mul');
	let mull = mul.multiplication(num1, num2);
	console.log("mull is = " + mull);
    break;
  case 'div':
    // code block
	var div = require('./div');
	let divv = div.division(num1, num2);
	console.log("divv is = " + divv);
    break;
  default:
    // code block
	console.log("Add, sub, mul and div");
}

