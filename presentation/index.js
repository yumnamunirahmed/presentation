// "CHAPTER NO : 26 ":
// TOPIC : ROUNDING NUMBERS 
// DEFINITION:
// Rounding numbers refers to the process of adjusting a number to its nearest integer or specified decimal_
// example : we have a number 4.7 if we solve it so its become 5 
//  Rounding number have three method:
// but i only explain 1 method which is ...
//  1) Math.round():
// In javascript this function is used  to round a number to the nearst integer.
// example:
console.log(Math.round(9.8));
//1-ROUNDING RULE
//1 if the decimal part of the number is 0.5 or greater, it rounds up the next integer.
//2- if the decimal part is less than 0.5 , it rounds down to the nearest integer.
// ROUNDING UP
console.log(Math.round(4.5)); // output 5
console.log(Math.round(3.7)); //output 4
//ROUNDING DOWN 
console.log(Math.round(4.4)); //output 4
console.log(Math.round(2.3)); //output 2
//NEGATIVE NUMBERS
console.log(Math.round(-4.5)) //output -4 
console.log(Math.round(-4.6)); //output -5
//Math.round() is a simple yet powerful method for rounding numbers in T.S, making it essential for various  
//applications in programming and data handling.
console.log(Math.round(9.8)); //output 10