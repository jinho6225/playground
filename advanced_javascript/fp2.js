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
