// 1. Write a program of traffic control that accepts the traffic light displayed and prints the message. if the traffic light is red print the vehicles must stop.

// ANS.
let trafficLight = 'red';

if(trafficLight==='green'){
    console.log('You can go')
}
else if(trafficLight==='yellow'){
    console.log('You can wait')
}
else if(trafficLight==='red'){
    console.log('You Must Stop')
}
else{
    console.log('Invalid traffic light')
}
// output : You Must Stop


// 2. Write a program to print largest of 2 numbers.

// ANS.
const num1 = 10;
const num2 = 20;

if(num1>num2){
    console.log(`${num1} is largest`)
}
else{
    console.log(`${num2} is largest`)
}
// output : 20 is largest



// 3. Write a program that takes a number as input and output "Fizz" if it si divisible by 3,"Buzz" if it is divisible by 5, and "FizzBuzz" if it is divisible by both 3 and 5. Note that any number can be passed and not restricted to the numbers divisible by 3 or 5.

// Ans.
let num = 15;

if(num % 5 == 0 && num % 3 == 0){
    console.log("FizzBuzz")
}
else if (num % 3 == 0){
    console.log("Fizz")
}
else if(num % 5 == 0){
    console.log("Buzz")
}
else{
    console.log("Invalid input")
}

// output : FizzBuzz

