//old
//const hello = require('./block-1');
//hello();


//es 6 standart!

import {foo, bar} from './block-1';
console.log(`${foo} ${bar}`);

//default
import saydefault from './block-1';
saydefault();

//how renames inport variables or functions or some one)
import {rename as ren} from './block-1';
console.log(ren);

//import all functions and variables of js file
import * as data from './block-1';
console.log(`${data.foo} or ${data.bar}`); //we get an object and work with it as an object
data.saysome();

window.addEventListener('DOMContentLoaded', () => {
    saydefault();
});

