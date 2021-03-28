//object spread operator

const animals = {
    tiger: 23,
    lion: 5,
    monkey: 2,
    bird: 40
}

//tiger - 23
//rest - { lion: 5, monkey: 2 }

const array = [1,2,3,4,5]
function sum(a, b, c, d, e) {
    return a + b + c + d + e;
}

sum(...array) // 15

function objectSpread(p1, p2, p3) {
    console.log(p1)
    console.log(p2)
    console.log(p3)
}

const { tiger, lion, ...rest } = animals

objectSpread(tiger, lion, rest)

//finally

// for await of



//ES2020
Promise.allSettled()
//they do not care whether or not it is resolved or rejected
//it will show all result(resolve, reject)