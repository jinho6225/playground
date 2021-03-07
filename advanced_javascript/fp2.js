//Immutability
const obj = { name: "Andrei" };
function clone(obj) {
  return { ...obj }; // this is pure.
}

function updateName(obj) {
  const obj2 = clone(obj);
  obj2.name = "Nana";
  return obj2;
}
console.log(updateName(obj));
console.log(obj);

//HOF (higher Order Function) //return another function or receive function as parameter
const hof = () => () => 5;
hof(); // function
hof()(); // 5

const hof2 = (fn) => fn(5);
console.log(
  hof2(function a(x) {
    return x;
  })
);

//Closure
const closure = function () {
  let count = 0;
  return function increment() {
    count++;
    return count;
  };
};
console.log(closure()); // [Function: increment]
const incrementFn = closure();
console.log(incrementFn());
console.log(incrementFn());
console.log(incrementFn());

// currying
const multiply = (a, b) => a * b;
const curryiedMultiply = (a) => (b) => a * b;
const curryiedMultiplyBy5 = curryiedMultiply(5);

console.log(curryiedMultiply(5)(3));
console.log(curryiedMultiplyBy5(4));

//Partial Application

//currying case
const multiply2 = (a, b, c) => a * b * c;
const curryiedMultiply2 = (a) => (b) => (c) => a * b * c;
console.log(curryiedMultiply2(3)(4)(10));
// partial application case
const multiply3 = (a, b, c) => a * b * c;
const partialMultiplyBy5 = multiply3.bind(null, 5);
console.log(partialMultiplyBy5(8, 3));

// Compose
const compose = (f, g) => (data) => f(g(data));
const mutiplyBy3 = (num) => num * 3;
const makePositive = (num) => Math.abs(num);

const multiplyBy3AndAbsolute = compose(mutiplyBy3, makePositive);
console.log(multiplyBy3AndAbsolute(-50), "compose");

// Pipe -> oppsite order for fn (left to right)
const pipe = (f, g) => (data) => g(f(data));

//arity
