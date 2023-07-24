
// $ Data types of java script 

//  * There are 7 data types available in JavaScript. You need to remember that JavaScript is loosely typed(or dynamic language), so any value can be assigned to variables in JavaScript.

// * According to the latest ECMAScript standard, there are 6 primitive data types and 1 non-primitive object.


// * Primitve Data Type 

//  1. Number    =  represents integer and floating values.

//  2. String    =  represents textual data.

//  3. Boolean   =  logical entity with values as true or false.

//  4. Undefined =  represents a variable whose value is not yet assigned.

//  5. Null      =  represents the intentional absence of value.

//  6. Symbol    =  represents a unique value .



// *  Non-Primitive Data Type 

// 1. Object - Represents key-value pair 

// Primitive
let a = 10.2;
let b = "hello";
let c = true;
let d = undefined;
let e = null;
let f = Symbol("I am a nice symbol ");
let g;

console.log(a, b, c, d, e, f, g);

console.log(typeof a);
console.log(typeof b);
console.log(typeof c);
console.log(typeof d);
console.log(typeof e);
console.log(typeof f);




// Objects is non primitive

const person = {
    firstName:"Tony",
    lastName :"Stark",
    age : 40,
    getname:function(){
        return this.firstName+" "+this.lastName;
    }
};
console.log(person.getname());// output is Tony Stark

const dic ={

    appraciate : "recognize the full worth of.",
    atraxia: "a state of fredom from emotional disturbance and anxiety",
    yakka: "work, especially hard work."
    
}

console.log(dic.yakka);

