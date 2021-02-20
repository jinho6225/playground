/**
 * primitive type
5 // number
true // boolean
'string' // string
undefined // undefined
null // object
Symbol('just me') // symbol

* Non-primitive type (Object)
{} // object
[] // object
function() {} // function
 */

function a() {
  return 5;
}

a.hi = "hihihi";
console.log(a.hi);

//pass by value vs pass by reference

// let obj = { a: "a", b: "b", c: "c", d: "d" };
// let clone = obj;

// console.log(obj, "1");
// clone.c = 5;
// console.log(obj, "2");

//shallow clone
let obj2 = { a: "a", b: "b", c: "c", d: "d" };
let clone2 = Object.assign({}, obj2);
let clone3 = { ...obj2 };

console.log(obj2, "1");
clone2.c = 5;
console.log(obj2, "2");

console.log(clone2, "2");
console.log(clone3, "3");

let obj = {
  a: "a",
  b: "b",
  c: {
    deep: "try and copy me",
  },
};

let clone4 = Object.assign({}, obj);
let clone5 = { ...obj };

//deep clone
let superClone = JSON.parse(JSON.stringify(obj));

console.log(clone4);
console.log(clone5);

obj.c.deep = "hahaha";
console.log(clone4);
console.log(clone5);

console.log(superClone);

//Type Coercion
console.log(-0 === +0); //true
console.log(Object.is(-0, +0)); //false

console.log(NaN === NaN); //false
console.log(Object.is(NaN, NaN)); //true

console.log("==================");

console.log(false == ""); //true
console.log(false == []); //false //true
console.log(false == {}); //false
console.log("" == 0); //true
console.log("" == []); //false //true
console.log("" == {}); //false
console.log(0 == []); //false //true
console.log(0 == {}); //false
console.log(0 == null); //true //false

//Dynamic type language vs Static type language

//Weakly typed vs Strongly typed
let a = "booooyaa";
a + 17;
//'boooooyaa17'

//Static Typing in JavaScript
