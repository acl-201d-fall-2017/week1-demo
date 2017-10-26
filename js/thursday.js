'use strict';

alert('hi world!')

// annoy();

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

/* changing up the order! */
announceBreakfast();
console.log('breakfast');
console.log('lunch');
console.log('dinner');



function announceBreakfast () {
    console.log('breakfast');
}

function announceLunch () {
    console.log('lunch');
}

function announceDinner() {
    console.log('dinner');
}


announceBreakfast();
announceLunch();
announceDinner();
announceBreakfast();



/* Make things DRY!!! */

function announce (meal) {
    console.log(meal);
}

announce('third breakfast');





/* function declaration vs function expression */

// function expression can only be called after being saved in a variable
const collectCats = function () {
    console.log('Lure them with tuna');
};

const appease = function () {
    const name = prompt('name pls?');
    alert('no, really i am super super sorry ' + name );
};

// appease();


// function declarations! can be used before its declared in the code
const variableName = 'someting';

function nameAFunction (name) {
    // code that names functions
}

function annoy () {
    const favLetter = prompt('what is your favorite letter?');
    for (let i = 0; i < 5; i ++) {
        alert(favLetter.toUpperCase());
    }
}

function collectDogs () {
    console.log('Lure them with frisbees')
}



/* parameter and variable scope */

function ask (word, alertType) {
    
    const phrase = 'please ' + word.toLowerCase() + ' and thank you, kindly!';
    if (alertType === 'confirm') {
        confirm(phrase);
    } else if (alertType === 'prompt') {
        prompt(phrase);
    } else {
        alert(phrase);
    }

    console.log( 'inside ask function ------------ ');
    console.log( 'word is:' + word );
    console.log( 'alertType is:' + alertType );
    console.log( 'phrase is:' + phrase );

    return 'lol';
}

console.log(phrase);
const moon = ask('take a break', 'confirm');
console.log( 'the phrase was: ' + moon );

// const word = 'defined outside';

console.log( 'outside ask function ------------ ');
console.log( 'word is:' + word );
console.log( 'alertType is:' + alertType );
console.log( 'phrase is:' + phrase );

