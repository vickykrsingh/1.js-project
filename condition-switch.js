// 1. Write a program that takes in a day of the week (e.g. Monday , Tuesday, etc.) and output the number of day until the weekend.

// Ans.
const day = 'Wednesday'

switch(day){
    case 'Monday':
        console.log('6 days until weekend');
        break;
    case 'Tuesday':
        console.log('5 days until weekend');
        break;
    case 'Wednesday':
        console.log('4 days until weekend');
        break;
    case 'Thursday':
        console.log('3 days until weekend');
        break;
    case 'Friday':
        console.log('2 days until weekend');
        break;
    case 'Saturday':
        console.log('1 day until weekend');
        break;
    case 'Sunday':
        console.log('0 day until weekend');
        break;
    default :
        console.log('Invalid day')
        break;
}
// output : 4 days until weekend


// 2. Write a program that takes in a number between 1 and 12 and outputs the corresponding month of the Year.

// ANS.
const Num = 3;

switch(Num){
    case 1:
        console.log('January');
        break;
    case 2:
        console.log('February');
        break;
    case 3:
        console.log('March');
        break;
    case 4:
        console.log('April');
        break;
    case 5:
        console.log('May');
        break;
    case 6:
        console.log('June');
        break;
    case 7:
        console.log('July');
        break;
    case 8:
        console.log('August');
        break;
    case 9:
        console.log('September');
        break;
    case 10:
        console.log('October');
        break;
    case 11:
        console.log('November');
        break;
    case 12:
        console.log('December');
        break;
    default : 
        console.log('Invalid Number');
        break;
}
// output : March