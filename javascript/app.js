// console.log('Hello World');

// function name(first, last = 'Vickery') {
//     last = last ? : 'Curry'; //ternary
//     console.log(first, last);
// }

function name(first = 'Abby', last = 'Curry') {
    console.log(first, last);
}

name('Abby', 'Chili');
name('Abby');
name();

// if(last) { last } else { 'Curry' };