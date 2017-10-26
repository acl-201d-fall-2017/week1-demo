'use strict';

let score;

const seasons = ['fall','autumn','summer','winter','spring'];
askForFav( seasons, 'What is your favorite season?', 'No, really, what is your fav season??' );

const vacations = ['beach','mountains'];
askForFav( vacations, 'What is your fav vacation spot?', 'Choose: beach or mountains?' );

function askForFav (possibleAns, question, secondQuestion) {
    let answer = prompt( question );

    while ( !possibleAns.includes(answer) ) {
        answer = prompt( secondQuestion );
    }

    score = possibleAns.indexOf(answer);
}


// TODO ask user their favVacation until they answer correctly
// const favVacation = prompt( 'Which vacation spot do you prefer? Beach or mountains?' );

if (score === 0) {
    alert( 'you are parseInt()' );
} else if (score < 3) {
    alert( 'you are .toLowerCase()' );
} else if (score >= 3) {
    alert( 'you are console.log()' );
}