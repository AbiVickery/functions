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
     newVar = 'Hola';
     newLet = 'mundo';
     newConst = '!';

    console.log(param1, param2, newConst);

}

scope();


newConst = 'oops!'

// console.log(newVar);
// console.log(newLet);
// console.log(newConst);
console.log(newConst);

function sum(num1, num2) {
    return num1 + num2;
}

sum(1,2); // 3
// add == 3
add += 3;
console.log('add ==', add);