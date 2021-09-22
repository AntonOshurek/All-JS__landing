//old
/* function hello() {
    console.log('hello bro');
    let hello = 'hello bro';
    const par = document.querySelector('.webpack-title').innerHTML = hello;
}
module.exports = hello; */

//es 6 standart!
//for default export!!!
//export default function saysome()
export function saysome() {
    let hello = 'hello bro iam es-6 :)';
    const par = document.querySelector('.webpack-title').innerHTML = hello;
};

export default function saydefault() {
    let hello = 'hello i am a default function bro :)';
    console.log(hello);
};

/*-------------------------------------*/

export let foo = 'foo';

let bar = 'bar';
export {bar};

export let rename = 'rename';
