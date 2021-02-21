//4ways function define and invoke
// function one() {
//   return 1;
// }
// console.log(one());
// const obj = {
//   two() {
//     return 2;
//   },
// };
// console.log(obj.two());
// function three() {
//   return 3;
// }
// console.log(three.call());

// const four = new Function("return 4");
// console.log(four());

// function woohooo() {
//   console.log("woohooo");
// }

// woohooo.yell = "ahhhhhh";
// console.log(woohooo);

// function a(fn) {
//   fn();
// }
// a(function () {
//   console.log("hi there");
// });

// function b() {
//   return function c() {
//     console.log("bye");
//   };
// }

// let d = b();
// d();
// b()();

//fucntion() => function(a,b) => HOF (Higher Order Function)

// const multiplyBy = function(num1) {
//     return function(num2) {
//         return num1 * num2
//     }
// }

const multiplyBy = (num1) => (num2) => num1 * num2;

const multiplyByTwo = multiplyBy(2);
const multiplyByFive = multiplyBy(5);
// console.log(multiplyByTwo(4));
// console.log(multiplyByTwo(10));
// console.log(multiplyByFive(6));

//Closures  //Prototypes
function a() {
  let grandpa = "grandpa";
  return function b() {
    let father = "father";
    return function c() {
      let son = "son";
      return `${grandpa} > ${father} > ${son}`;
    };
  };
}

const one = a()()();
console.log(one);

//exercise1
// function callMeMaybe() {
//   setTimeout(() => {
//     console.log(callMe);
//   }, 3000);
//   const callMe = "Hi! I am now here!";
// }

// callMeMaybe();

// Memory efficient

// function heavyDuty(index) {
//   const bigArray = new Array(7000).fill("😀");
//   return bigArray[index ];
// }

// heavyDuty(688);

// function heavyDuty(index) {
//   const bigArray = new Array(7000).fill("😀");
//   return function returnResult() {
//     return bigArray[index];
//   };
// }

// let result = heavyDuty(688);
// console.log(result());

// Encapsulation

// const makeNuclearButton = () => {
//   let timeWithoutDestruction = 0;
//   const passTime = () => timeWithoutDestruction++;
//   const totalPeachTime = () => timeWithoutDestruction;
//   const launch = () => {
//     timeWithoutDestruction = -1;
//     return "💥";
//   };
//   setInterval(passTime, 1000);

//   return {
//     launch,
//     totalPeachTime,
//   };
// };

// const ohno = makeNuclearButton();

let view;
function init() {
  let called = 0;
  return function () {
    if (called === 0) {
      view = "🏔";
      called++;
      console.log("view has been set!");
    } else {
      return;
    }
  };
}

let start = init();
start();
start();
start();
console.log(view);

const array = [1, 2, 3, 4];
for (var i = 0; i < array.length; i++) {
  setTimeout(() => {
    console.log("I am at index " + i);
  }, 3000);
}

for (var i = 0; i < array.length; i++) {
  (function (idx) {
    setTimeout(() => {
      console.log("I am at index " + idx);
    }, 3000);
  })(i);
}

for (let i = 0; i < array.length; i++) {
  setTimeout(function () {
    console.log("I am at index " + i);
  }, 3000);
}
