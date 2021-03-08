// Compose

const compose = (f, g) => (data) => f(g(data));
const multiplyBy3 = (num) => num * 3;
const makePositive = (num) => Math.abs(num);

const multiplyBy3AndAbslute = compose(multiplyBy3, makePositive);

console.log(multiplyBy3AndAbslute(-50));

// Pipe
/**
going from right to left

fn1(fn2(fn3(50)))
compose(fn1, fn2, fn3)(50)
pipe(fn3, fn2, fn1)(50)

they will have exact same output
it's only different by order
*/
const pipe = (f, g) => (data) => g(f(data));
