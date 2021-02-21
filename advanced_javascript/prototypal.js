const array = [];
array.__proto__; // array
array.__proto__.__proto__; // object

//prototypal Inheritance

let dragon = {
  name: "Tanya",
  fire: true,
  fight() {
    return 5;
  },
  sing() {
    if (this.fire) {
      return `I am ${this.name}, the breather of fire`;
    }
  },
};

let lizard = {
  name: "Kiki",
  fight() {
    return 1;
  },
};

// const singLizard = dragon.sing.bind(lizard);
// console.log(singLizard());
lizard.__proto__ = dragon;

for (let prop in lizard) {
  if (lizard.hasOwnProperty(prop)) {
    console.log(prop);
  }
}

const obj = {};
console.log(obj.__proto__);
console.log(obj.__proto__.__proto__);
