'use strict';

let score;

const seasons = ['fall','autumn','summer','winter','spring'];
// const vacations = ['beach','mountains'];

// TODO ask user their favSeason until they answer correctly
let favSeason = prompt( 'What is your favorite season?' ); // 'winter'

while ( !seasons.includes(favSeason) ) {
    favSeason = prompt('No, really, what is your fav season??');
}

score = seasons.indexOf(favSeason); // 3



// console.log(seasons.includes(favSeason));


// TODO ask user their favVacation until they answer correctly
// const favVacation = prompt( 'Which vacation spot do you prefer? Beach or mountains?' );

// TODO return a function based on a user's score (using their answer's index)
if (score === 0) {
    alert( 'you are parseInt()' );
} else if (score < 3) {
    alert( 'you are .toLowerCase()' );
} else if (score >= 3) {
    alert( 'you are console.log()' );
}