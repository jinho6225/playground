// HOF

const hof = () => () => 5;
hof(); //[Function]
hof()(); // 5

const hof2 = (fn) => fn(5);

hof2(function a(x) {
  return x;
});

// Closure
const closure = function () {
  let count = 0;
  return function increment() {
    count++;
    return count;
  };
};

const increment = closure();
console.log(increment());
console.log(increment());
console.log(increment());

// we could make private variable using closure
