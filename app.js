'use strict';

let score = 0;

const seasons = ['fall','autumn','summer','winter','spring'];
askForFav( seasons, 'What is your favorite season?', 'No, really, what is your fav season??' );

const vacations = ['beach','mountains','forest','lake'];
askForFav( vacations, 'What is your fav vacation spot?', 'Okay, but if you had to choose: beach or mountains?' );

const pets = ['cat','dog','mouse','iguana','goat','rock'];
askForFav( pets, 'What is your fav pet animal?', 'Hmm, never heard of that! Try another.' );

const language = ['python','ruby','java','javascript'];
askForFav( language, 'What is your fav programming language?', '*ahem* I think you mean JavaScript.' );

function askForFav (possibleAns, question, secondQuestion) {
    let answer = prompt( question ).toLowerCase();

    while ( !possibleAns.includes(answer) ) {
        answer = prompt( secondQuestion ).toLowerCase();
    }

    score += possibleAns.indexOf(answer);
}

if (score === 0) {
    alert('you are parseInt()');
} else if (score <= 7) {
    alert('you are .toLowerCase()');
} else if (score <= 13) {
    alert('you are console.log()');
} else if (score > 13) {
    alert('you are alert()');
}