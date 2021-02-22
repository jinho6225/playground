const array = [];
array.__proto__; // array
array.__proto__.__proto__; // object

//prototypal Inheritance
//even if javascript has class keyword, it is syntatical sugar
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
// lizard.sing();
// console.log(dragon.isPrototypeOf(lizard));

for (let prop in lizard) {
  if (lizard.hasOwnProperty(prop)) {
    console.log(prop);
  }
}
