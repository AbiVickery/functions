// console.log('Hello World');

// function name(first, last = 'Vickery') {
//     last = last ? : 'Curry'; //ternary
//     console.log(first, last);
// }

function name(first = 'Abby', last = 'Curry') {
    console.log(first, last);
}

name();
name('Danie');
name('Abby', 'Curry');

// if(last) { last } else { 'Curry' };

function scope(param1 = 'Hello', param2 = 'world') {
    var newVar = 'Hola';
    var newLet = 'mundo';
    const newConst = '!';

    console.log(param1, param2, newConst);

}


console.log(newVar);
console.log(newLet);
console.log(newConst);
