// 1. Specify an example for all the datatypes in javascript, store the values in a variable , and verify the type of value stored.

// ANS : 
// String : 
const myName = 'vicky kumar';
console.log(typeof myName);
// output : string
// Number : 
    // Integer
    const rollNo = 24;
    console.log(typeof rollNo)
    // output : number
    // Float
    const marks = 87.85;
    console.log(typeof marks)
    // output : number
    // Positive Infinite Number
    const InfinitePositive = Number.MAX_VALUE * 2
    if(InfinitePositive === Number.POSITIVE_INFINITY)
    {
        console.log('positive infinite value')
    }
    // output : positive infinite value
    // Negative Infinite Number
    const InfiniteNegative = Number.NEGATIVE_INFINITY * 2
    if(InfiniteNegative === Number.NEGATIVE_INFINITY){
        console.log('negative infinite value')
    }
    // output : negative infinite value

// BIGINT
const BigNum = BigInt(3823892083181828982993884324984732897482);
console.log(typeof BigNum)
// output : bigint

// BOOLEAN
const equal = 4===4;
console.log(typeof equal)
// output : boolean
const notEqual = 4===5;
console.log(typeof notEqual)
// output : boolean

// UNDEFINED
let undefinedNum;
console.log(undefinedNum);
// output : undefined

// NULL
const nullVal = null;
console.log(nullVal)
// output : null

// SYMBOL
const Sym = Symbol('vicky');
console.log(typeof Sym)
// output : symbol

// OBJECT
    // (i) Array
    const data = [23,'vicky',['patna',true]]
    console.log(typeof data)
    // output : object
    // (ii) Object
    const student = {
        'name':'vicky kumar',
        'rollNo':29,
        'gender':'male',
        'status':true
    }
    console.log(typeof student)
    // output : object




// 2. Create 2 valid variables and invalid variables and print them onto the console comment the result and error message.

// Ans.
    // (i) Valid variable : 
    let city = 'patna';
    console.log(city);
    // output : patna
    let iAmVicky = true;
    console.log(iAmVicky);
    // output : true
    // (ii) Invalid Variable : 
    let <address = city;
    console.log(<address);
    // output : SyntaxError: Invalid left-hand side in assignment
    let const = 'hello';
    console.log(const);
    // output : SyntaxError: Unexpected token 'const'