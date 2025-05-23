// Primitive

// 7 types : String, Number, Boolean, null, undefined, Symbol, BigInt.

const score = 100
const scoree = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123') 

console.log(id === anotherId)

// Reference type(non primitive)

// Array, Object, Functions


const heros = ["shaktiman, naagraj"]
const obj ={
    name: "kunal",
    age: 22,
}

const myfunction = function(){
    console.log("Hello world")
}

console.log(typeof bigNumber);

// ========================

// Stack (Primitive), Heap(non-Primitive)

let myYoutubename = "kunalbaby"

let anotherName = myYoutubename
anotherName = "chaiaurcode"

console.log(myYoutubename);
console.log(anotherName);

let userOne = {
    email: "usergoogle@.com",
    upi: "user@byl"
}

let userTwo = userOne

userTwo.email = "kunal@google.com"

console.log(userOne.email);
console.log(userTwo.email);