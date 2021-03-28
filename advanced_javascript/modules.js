// Global Scope
    //Module Scope
        // Function Scope
            // Block Scope - let and const


//IIFE
//Module Pattern
var fightModule = (function() {
    var harry = 'potter'
    var voldemort = 'he who must not be named'
    function fight(char1, char2) {
        var attack1 = Math.floor(Math.random() * char1.length);
        var attack2 = Math.floor(Math.random() * char2.length);
        return attack1 > attack2 ? `${char1} win` : `${char2} win blahhhh`
    }
    return {
        fight: fight
    }
})()

//reuseablility

//CommonJS and AMD (Asynchronous Module Definition)

//CommonJS need to run synchronouse
var module1 = require('module1')
var module2 = require('module2')

function fight() {

}

module.exports = {
    fight: fight
}

//after CommonJS
//browserify => bundle.js (one giant big javascript file)

//AMD ...not famous


// new ES6 Module

import module1 from 'module1'
import module2 from 'module2'


const harry = 'potter'
const voldemort = 'he who must not be named'

function jump() {
}
export function fight(char1, char2) {
    const attack1 = Math.floor(Math.random() * char1.length);
    const attack2 = Math.floor(Math.random() * char2.length);
    return attack1 > attack2 ? `${char1} win` : `${char2} win blahhhh`
}

//type="module" within script tag