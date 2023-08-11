// primitive

// 7 types : string, Number, Boolean,null,undefined,symbol,BigInt

const score=100
const scoreValue=100.3

const isLoggedIn =false
const outsideTemp= null

let userEmail

const id=Symbol("123")
const anotherId=Symbol("123")

console.log(id == anotherId);

const bigNumber =12763283242342342343249291n
console.log(typeof bigNumber);

// Reference (Non primitive)

// Array ,Objects ,Functions

const heros =["shaktiman","naagraj","doga"]
let myObj ={
    name:"hitesh",
    age:22,
}

const myFunction = function(){

     console.log("Hello world")
}

console.log(typeof outsideTemp);

console.log(typeof myFunction);
console.log(typeof heros);
console.log(typeof anotherId);

