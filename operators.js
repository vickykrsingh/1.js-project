// OPERATORS
// 1. Write a programs that prints the multiplication table in the textbook format of any number specified.

// ANS.
const number = 5;
console.log(`${number} * 1 = ${number*1}`)
console.log(`${number} * 1 = ${number*2}`)
console.log(`${number} * 1 = ${number*3}`)
console.log(`${number} * 1 = ${number*4}`)
console.log(`${number} * 1 = ${number*5}`)
console.log(`${number} * 1 = ${number*6}`)
console.log(`${number} * 1 = ${number*7}`)
console.log(`${number} * 1 = ${number*8}`)
console.log(`${number} * 1 = ${number*9}`)
console.log(`${number} * 1 = ${number*10}`)


// 2. Write a program to perform all the arithmetic operations[except increment and decrement operators] of javascript of any two numbers stored in the variables num1 and num2. Also , print the results to the console.

// Ans.
const num1 = 20;
const  num2 = 4;

// (+) operator : 
console.log(`Addition of ${num1} and ${num2} is ${num1 + num2}`);

// (-) operator : 
console.log(`Subtraction of ${num1} and ${num2} is ${num1 - num2}`)

// (*) multiplication operator : 
console.log(`Multiplication of ${num1} and ${num2} is ${num1 * num2}`);

// (/) Division operator : 
console.log(`Division of ${num1} and ${num2} is ${num1/num2}`);

// (%) Modular Division operator : 
console.log(`Modular Division of ${num1} and ${num2} is ${num1%num2}`);

// (**) Exponent operator : 
console.log(`Exponent of ${num1} and ${num2} is ${num1**num2}`)

// Output : 
// Addition of 20 and 4 is 24
// Subtraction of 20 and 4 is 16
// Multiplication of 20 and 4 is 80
// Division of 20 and 4 is 5
// Modular Division of 20 and 4 is 0
// Exponent of 20 and 4 is 160000



// 3. Write a program to find out the perimeter of a rectangle. Print the results to the console.

// Ans.
const length = 10;
const width = 50;

let perimeter = 2 * (length + width);
console.log(`The perimeter of rectangle whose length is ${length} and width is ${width} = ${perimeter}`)
// output : The perimeter of rectangle whose length is 10 and width is 50 = 120


// 4. Write a program to demonstrate the result of comparisons operators. Note that both the truth and false condition for each operator must be specified.

// Ans.
let n1 = 20;
let n2 = 30;
let n3 = '20';
let n4 = 20

console.log(n1==n3) // true
console.log(n1===n3) //false
console.log(n1>n2) //false
console.log(n1<n2) // true
console.log(n1>=n4) // true
console.log(n1<=n4) //true
console.log(n1!=n2) //true

