
// SCOPE - NESTED FUNCTIONS

let a = 10 

function outerr(){
    let b = 9;
    function inner(){
        let c = 8;
        function deepInner(){
            let d = 9;    
            console.log(a,b,c, d); // a, b, c, d can be accessed
        }
        deepInner();
        console.log(a, b, c); // d cannot be accessed
    }
    inner();
    console.log(a,b) // c,d cannot be accessed
}

outerr() 
// op = 10 9 8 9
//      10 9 8
//      10 9


// CLOSURE
console.log('\n\t\t\tClosures')
console.log('\tSnippet1')
// Snippet1 
function outer(){
    let cnt = 0;

    function inner(){
        cnt++;
        console.log(cnt);
    }
    inner()
    
}
outer()
outer()

// op = 1
//      1  

// Snippet1 - On calling outer function the counter gets intialized to zero everytime it is called.
//  So no matter how many times it is called counter will never gets incremented



// Snippet2
console.log('\tSnippet2')
function outer1(){
    let cnt = 0;

    function inner(){
        cnt++;
        console.log(cnt);
    }
    inner()
    inner()
}
outer1()

// op = 1
//      2


// Snippet2 - Here outer function is called one time, but inner is called two times inside outer 
// so outer will initialize counter to 0 only once no matter how many times inner gets called. 
// Finally every time inner was called the counetr gets increased

// We can return the inner function to global scope without calling it inside outer function , can be done as follows(Snippet3)

// Snippet3
console.log('\tSnippet3')
function outer2(){
    let cnt = 0;

    function inner(){
        cnt++;
        console.log(cnt);
    }
    return inner // without using open-paranthesis returning the inner to global scope  
}

const Fn = outer2()
// Now if we will call the inner to execute by calling it like seperate from outer but not seerated :)
for( let i = 0; i < 5; i++){
    Fn()
}
// op = 1
//      2
//      3
//      4
//      5


// FUNTION CURRYING
console.log('\n\t\t\tCurry')
function sum(a,b,c){
    return a+b+c;
}

console.log("NormalFunctionSum", sum(1,2,3));


function curry(fn){
    return function(a){
        return function(b){
            return function(c){
                return fn(a, b, c);
            }
        }
    }
}

const curriedSum = curry(sum)
console.log("CurriedFunctionSum ", curriedSum(1)(2)(3))

// this keyword 
// this keyword refers to the object with which particular attribute or method is called
// 1 - Implicit Binding

const person = {
    'name':'Dolby',

    myName : function(){
        console.log(`My name is ${this.name}`)
    }
}
person.myName() // op = My name is Dolby ... here this = person


// 2 - Explicit Binding

function myName(){
    console.log(`My name is ${this.name}`)
}

myName.call(person) // op = My name is Dolby ... here this = person

// 3 - new Binding (Constructor function)


function saymyName(name) {
    this.name = name;
}

const p1 = new saymyName('Dolby')
const p2 = new saymyName('Doodle')

console.log(p1.name, p2.name) // op = Dolby Doodle .... ... here this = p1 and this = p2

// 4 - Default Binding

function sayMyname(){
    console.log(`My name is ${this.name}`)
}

sayMyname() // op = My name is undefined ... here this = undefined


// PROTOTYPE

function Person(fname, lname){
    this.firtname = fname;
    this.lastname = lname;
}

const per1 = new Person("Monkey D", "Luffy")
const per2 = new Person("Uzumaki", "Naruto")

// If we need a function such that all the objects of particular class should inherit ,
// then we use prototype of class or constuctor function directly to define a function

Person.prototype.getFullName = function(){
    console.log(`${this.firtname} ${this.lastname}`)
}

per1.getFullName() // op = Monkey D Luffy
per2.getFullName() // op = Uzumaki Naruto

// Prototypical Inheritance

// We'll create a protagonist 

function Protagonist(fname, lname){
    Person.call(this, fname, lname)
    this.isProtagonist = true 
}

Protagonist.prototype = Object.create(Person.prototype) 
// First the method called will check the method which is called in Protagonist, 
// if it doesn't find it checks in the inherited one (Object.create(Person.prototype)) i.e., Person Constructor function or class

const protagonist = new Protagonist("Kyotaka", "Ayanokoji")
protagonist.getFullName() // op = Kyotaka Ayanokoji


// Even if you don't understand the previous concepts which are this keyword binding, prototype and ptotoypical inheritance
// these same can be done with classes if you know OOPS

// Class 

class Anime{
    constructor(fname, lname){
        this.firstName = fname;
        this.lastName = lname;
    }

    getAnime = function(){
        return this.firstName + " " + this.lastName
    }
}

// creating an object

const anime1 = new Anime("One", "Piece")
const anime2 = new Anime("Naruto", "Shippuden")

console.log(anime1.getAnime()) // op = One piece
console.log(anime2.getAnime()) // op = Naruto Shipuden

// Inheritance with class

class Antagonist extends Anime{
    constructor(fname, lname){
        super(fname, lname);
        this.isAntagonist = true;
    }

    getAntagonist = function(){
        return this.getAnime(this.firstName, this.lastName)
    }
}

const anti1 = new Antagonist("Madara", "Uchiha")
const anti2 = new Antagonist("Black", "Beard")

console.log(anti1.getAntagonist()) // Madara Uchiha
console.log(anti2.getAntagonist()) // Black Beard

// ITERABLE ans ITERATOR
const obj = {
    [Symbol.iterator] : function() {
        let step = 0;
        const itertor = {
            
            next: function(){
                step++;
                if (step === 1){
                    return {value:'Hello', done:false}
                }else if (step === 2){
                    return {value:'World', done:false}
                }
                else{
                    return {value:undefined, done:true}
                }
            }
        }
        return itertor
    }
}

for (let word of obj){
    console.log(word)
}

// Generators

function* generatorFunc(){
    yield 'Hello' // yield pauses the execution next line can be continued by generator iteration
    yield 'World'
}

const generatorObj = generatorFunc()
console.log(generatorFunc()) // op = Object [Generator] {}
for( let word of generatorObj){
    console.log(word) // op = first iter Hello, second itr World
}