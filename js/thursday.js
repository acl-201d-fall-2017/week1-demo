'use strict';


/* anatomy of a function */

function shout (word) {
    return word.toUpperCase(); 
}

/*
    shout = the function's name
    word = the function's parameter
    {} = the function's body
    return word.toUpperCase() = the function's return statement
*/



/* function declaration vs function expression */

var collectCats = function () {
    console.log('Lure them with tuna');
}

function collectDogs () {
    console.log('Lure them with frisbees')
}



/* parameter and variable scope */

function kind (word, alertType) {
    const phrase = 'please ' + word.toLowerCase() + ' and thank you, kindly!';
    if (alertType === 'confirm') {
        confirm(phrase);
    } else if (alertType === 'prompt') {
        prompt(phrase);
    } else {
        alert(phrase);
    }
}