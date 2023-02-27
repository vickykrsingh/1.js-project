// VALUES AND DATATYPES

// 1. Create a javascript file,using javascript comments , List all the datatypes of javascript, and specify and example for each of them.

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



// 2. Create an array of 10 Product that you have recently purchased or viewed on an e-commerce site.

// Ans. 
const item = [
    'headphone',
    'mobile',
    'HDD',
    'Battery',
    'Laptop',
    'PowerBank',
    'USB Cable',
    'Cooling Pad',
    'Charger',
    'Smart Watch'
]



// 3. Create an object of a student registry of 5 students whose key is registration number and the value is the student name . Registration number starts from 1 and continues.

const studentDetail = {
    1:'vicky kumar',
    2:'rohit kumar',
    3:'rahul kumar',
    4:'vishal kumar',
    5:'divyanshu kumar'
}

