// js is dynamically typed


console.log("Hello from external js"); // op = Hello from external js

// variables 

let age = 20; // can be changed
console.log(age) // op = 20

const salary = 100; // cannot be changed
console.log(salary) // op = 100

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
    console.log("pre-result "+result +" post-result"); // op = pre-result undefined post-result
    console.log('pre-result', result ,' post-result') // op = pre-result
    const res = undefined; // not yet defined
    const data = null; // to explicitly define initialize with null
//BigInt, Symbol -> not beginner level

    // NON PRIMITIVE
// Objects
    const person = {
        "name":"Dolby",
        "age":"22",
    };

    console.log(person.name); // op = Dolby
    console.log(person.age); // op = 22

// array 
    const nums1 = [1,2,3,4];
    console.log(nums1[0]) // op = 1


// OPERATORS
console.log("\nOPERATORS\n")
let x = 10; // assigment operator
let y = 3;

console.log(x+y); console.log(x-y); console.log(x/y) ; console.log(x%y) // Arthimetic operators

// op = 13
//      7
//      3.3333333333333335
//      1

console.log(
    "\nInc and dec ops x = 10 \n"
)

console.log(++x); console.log(x--); console.log(x);// Increment and decrement same as java and cpp

// op = 11
//      11 
//      10

let a1 = 10;
let b1 = '10';
console.log("\ncomaprison Ops\n")
console.log(a1==b1); console.log(a1 === b1); console.log(a1>=b1); console.log(a1!=b1); console.log(a1!==b1) // comparison operators

// op = true
//      false
//      true
//      false
//      true

console.log("\nlogical Ops\n")
console.log(true && true); console.log(true || false); console.log(false && true) 

// op = true
//      true 
//      false

console.log('abc'+'def') // op = abcdef  ....string concatenation
console.log(23+'ase') // op = 23ase  ....numebr gets converted to str

// ternary op
console.log('\nternary op a = 11\n')
let numb = 11
const isEven = numb%2 === 0 ? 'Numebr is even':'It is odd' 
console.log(isEven) // op = It is odd

// TYPE CONVERSIONS
// 1.Implicit 
// 2. Explicit

console.log('abs'+2) // implicit op = abs2
console.log(true+'3') // implicit op = true3
console.log('4'-'1') //implicit op = 3
console.log('Doodle'- 'guy') // implicit op = NaN
console.log('5'-null) // implicit op = 5
console.log(5+undefined) // implicit op = NaN

console.log("\nExplicit\n")
console.log(Number('3')) // op = 3
console.log(Number('a')) // op = NaN
console.log(Number('3.14')) // op = 3.14
console.log(parseInt('3')) // op = 3
console.log(parseFloat('3.14')) // op = 3.14
console.log(String(500))
console.log(String(null))
console.log(String(undefined))
console.log((20).toString()) // op = 20 ... toString cannot convert null, undefined

console.log(Boolean(10)) // op = true ... this returns 0 when the input is null, undefined, 0 , '', NaN
console.log(Boolean(' ')) // op = true 
console.log(Boolean(false)) // op = false


// EQUALITY 
// (==) Allows coercion 
// (===) Doesn't allow coercion

const a = 10
const b = 10

console.log(a == b) // op = true
console.log(a === b) // op = true

const c = 10
const d = '10'

console.log(c == d) // op = true
console.log(c === d) // op = false

// Conditional Statements

// if 
const number = 5;
if (number > 0){
    console.log("Postive");
}
// op = Positive

// if else 

const num2 = 10;

if (num2%2 === 0){
    console.log("Even");
}else{
    console.log("Odd");
}
// op = Even

// if else if
let num = 5;
if (num < 5){
    console.log("Num is less than 5");
}else if (num > 5){
    console.log("Num is greater than 5");
}else if(num === 5){
    console.log("Num is equal to 5")
}
// op = Num is equal to 5

// switch

const color = 'red';

switch(color){
    case 'red':
        console.log('color is red');
        break;
    case 'blue':
        console.log('color is blue');
        break;
    case 'yellow':
        console.log('color is yellow');
        break;
    default:
        console.log("No color is given")
    }
// op = color is red

//LOOPS
// for 

for (let i = 1; i <= 5; i++){
    console.log("current iteration is "+ i);
}

// op = current iteration is 1
//      current iteration is 2
//      current iteration is 3
//      current iteration is 4
//      current iteration is 5

// while 
console.log('\nwhile\n')
let i = 1;

while (i < 6){
    console.log("current iteration is "+i);
    i++;
}
// op = current iteration is 1
//      current iteration is 2
//      current iteration is 3
//      current iteration is 4
//      current iteration is 5

i = 1;
do{
    console.log("One time definitely executes even though it doesn;t satisfies the condition in while");
}while(i > 1);

// op = One time definitely executes even though it doesn;t satisfies the condition in while

// for each 
const nums = [1,2,3,4,5];

for(const each of nums){ // picks the element in array at each iteration
    console.log(each);
}


// FUNCTIONS

function func1(name){
    return "Hello "+name;
}
console.log(func1('Dolby')) // op = Hello Dolby

function add(a, b){
    return a+b;
}
console.log(add(2,3)) // op = 5

// ARROW FUNCTIONS

const arrowAdd = (a,b)=>{
    return a+b;
}
// if we had only one statement in the arrow function just like the above 
// then  it can be written as follows

const arrowSum = (a,b) => a+b;

console.log(arrowAdd(1,2)); // op = 3
console.log(arrowSum(1,2)); // op = 3
num = 17;
const addFive = num => num+5; // op = 22
const addFivee = (num) => num+5; // op = 22


// Scope
if(true){
    const myName = 'Donglee';
}

// console.log(myName) // op = ERROR : myName is not defined

if (true){
    const myName = 'Donglee';
    console.log(myName); // op = Donglee
}

// high order functions

function testFn1(a){
    function testFn2(b){
        return b+1;
    }
    if (a%2 !== 0)   return testFn2(a);
    else return a;
}

console.log(testFn1(10)) //  op = 10
console.log(testFn1(9)) // op = 10

// Global variables can be used in any control statement and loops through the entire code