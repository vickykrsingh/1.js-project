// 1. Write a program that generates the multiplication table in the textbook format for a given number.

// ANS.
const num = 3;

for(i=1;i<=10;i++){
    console.log(`${num} * ${i} = ${num*i}`)
}
// output : 
// 3 * 1 = 3
// 3 * 2 = 6
// 3 * 3 = 9
// 3 * 4 = 12
// 3 * 5 = 15
// 3 * 6 = 18
// 3 * 7 = 21
// 3 * 8 = 24
// 3 * 9 = 27
// 3 * 10 = 30



// 2. Write a program that prints all the Positive even number till the number specified.

// ANS. 
const limit = 20;

for(i=2;i<=20;i=i=i+2){
    console.log(i)
}
// output : 
// 2
// 4
// 6
// 8
// 10
// 12
// 14
// 16
// 18
// 20