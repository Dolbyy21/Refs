// js is dynamically typed

// Instead of using console.log all the time will use the function names cl which takes a parameter as input for this entire code
function cl(a){
    console.log(a);
}

console.log("Hello from external js"); // op = Hello from external js

// variables 

let age = 20; // can be changed
cl(age) // op = 20

const salary = 100; // cannot be changed
cl(salary) // op = 100

// DATA TYPES
    //PRIMITIVE
// string 

    const name = "Dolby";
    const lang = 'japanese';

// Integer and float
    const total = 0;
    const PI = 3.14;

// Boolean
    const isGood = true;
    const hadNext = false;
// Undefined
    let result;
    cl("pre-result "+result +" post-result"); // op = pre-result undefined post-result
    cl('pre-result', result ,' post-result') // op = pre-result
    const res = undefined; // not yet defined
    const data = null; // to explicitly define initialize with null
//BigInt, Symbol -> not beginner level

    // NON PRIMITIVE
// Objects
    const person = {
        "name":"Dolby",
        "age":"22",
    };

    cl(person.name); // op = Dolby
    cl(person.age); // op = 22

// array 
    const nums1 = [1,2,3,4];
    cl(nums1[0]) // op = 1


// OPERATORS
cl("\nOPERATORS\n")
let x = 10; // assigment operator
let y = 3;

cl(x+y); cl(x-y); cl(x/y) ; cl(x%y) // Arthimetic operators

// op = 13
//      7
//      3.3333333333333335
//      1

cl(
    "\nInc and dec ops x = 10 \n"
)

cl(++x); cl(x--); cl(x);// Increment and decrement same as java and cpp

// op = 11
//      11 
//      10

let a1 = 10;
let b1 = '10';
cl("\ncomaprison Ops\n")
cl(a1==b1); cl(a1 === b1); cl(a1>=b1); cl(a1!=b1); cl(a1!==b1) // comparison operators

// op = true
//      false
//      true
//      false
//      true

cl("\nlogical Ops\n")
cl(true && true); cl(true || false); cl(false && true) 

// op = true
//      true 
//      false

cl('abc'+'def') // op = abcdef  ....string concatenation
cl(23+'ase') // op = 23ase  ....numebr gets converted to str

// ternary op
cl('\nternary op a = 11\n')
let numb = 11
const isEven = numb%2 === 0 ? 'Numebr is even':'It is odd' 
cl(isEven) // op = It is odd

// TYPE CONVERSIONS
// 1.Implicit 
// 2. Explicit

cl('abs'+2) // implicit op = abs2
cl(true+'3') // implicit op = true3
cl('4'-'1') //implicit op = 3
cl('Doodle'- 'guy') // implicit op = NaN
cl('5'-null) // implicit op = 5
cl(5+undefined) // implicit op = NaN

cl("\nExplicit\n")
cl(Number('3')) // op = 3
cl(Number('a')) // op = NaN
cl(Number('3.14')) // op = 3.14
cl(parseInt('3')) // op = 3
cl(parseFloat('3.14')) // op = 3.14
cl(String(500))
cl(String(null))
cl(String(undefined))
cl((20).toString()) // op = 20 ... toString cannot convert null, undefined

cl(Boolean(10)) // op = true ... this returns 0 when the input is null, undefined, 0 , '', NaN
cl(Boolean(' ')) // op = true 
cl(Boolean(false)) // op = false


// EQUALITY 
// (==) Allows coercion 
// (===) Doesn't allow coercion

const a = 10
const b = 10

cl(a == b) // op = true
cl(a === b) // op = true

const c = 10
const d = '10'

cl(c == d) // op = true
cl(c === d) // op = false

// Conditional Statements

// if 
const number = 5;
if (number > 0){
    cl("Postive");
}
// op = Positive

// if else 

const num2 = 10;

if (num2%2 === 0){
    cl("Even");
}else{
    cl("Odd");
}
// op = Even

// if else if
let num = 5;
if (num < 5){
    cl("Num is less than 5");
}else if (num > 5){
    cl("Num is greater than 5");
}else if(num === 5){
    cl("Num is equal to 5")
}
// op = Num is equal to 5

// switch

const color = 'red';

switch(color){
    case 'red':
        cl('color is red');
        break;
    case 'blue':
        cl('color is blue');
        break;
    case 'yellow':
        cl('color is yellow');
        break;
    default:
        cl("No color is given")
    }
// op = color is red

//LOOPS
// for 

for (let i = 1; i <= 5; i++){
    cl("current iteration is "+ i);
}

// op = current iteration is 1
//      current iteration is 2
//      current iteration is 3
//      current iteration is 4
//      current iteration is 5

// while 
cl('\nwhile\n')
let i = 1;

while (i < 6){
    cl("current iteration is "+i);
    i++;
}
// op = current iteration is 1
//      current iteration is 2
//      current iteration is 3
//      current iteration is 4
//      current iteration is 5

i = 1;
do{
    cl("One time definitely executes even though it doesn;t satisfies the condition in while");
}while(i > 1);

// op = One time definitely executes even though it doesn;t satisfies the condition in while

// for each 
const nums = [1,2,3,4,5];

for(const each of nums){ // picks the element in array at each iteration
    cl(each);
}


// FUNCTIONS

function func1(name){
    return "Hello "+name;
}
cl(func1('Dolby')) // op = Hello Dolby

function add(a, b){
    return a+b;
}
cl(add(2,3)) // op = 5

// ARROW FUNCTIONS

const arrowAdd = (a,b)=>{
    return a+b;
}
// if we had only one statement in the arrow function just like the above 
// then  it can be written as follows

const arrowSum = (a,b) => a+b;

cl(arrowAdd(1,2)); // op = 3
cl(arrowSum(1,2)); // op = 3
num = 17;
const addFive = num => num+5; // op = 22
const addFivee = (num) => num+5; // op = 22


// Scope
if(true){
    const myName = 'Donglee';
}

// cl(myName) // op = ERROR : myName is not defined

if (true){
    const myName = 'Donglee';
    cl(myName); // op = Donglee
}

// high order functions

function testFn1(a){
    function testFn2(b){
        return b+1;
    }
    if (a%2 !== 0)   return testFn2(a);
    else return a;
}

cl(testFn1(10)) //  op = 10
cl(testFn1(9)) // op = 10

// Global variables can be used in any control statement and loops through the entire code