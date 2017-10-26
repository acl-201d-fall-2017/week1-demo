'use strict';

let score;
askForFavSeason();


function askForFavSeason () {
    const seasons = ['fall','autumn','summer','winter','spring'];
    
    // TODO ask user their favSeason until they answer correctly
    let favSeason = prompt( 'What is your favorite season?' ); // 'winter'

    while ( !seasons.includes(favSeason) ) {
        favSeason = prompt('No, really, what is your fav season??');
    }

    score = seasons.indexOf(favSeason); // 3
}

// const vacations = ['beach','mountains'];

// TODO ask user their favVacation until they answer correctly
// const favVacation = prompt( 'Which vacation spot do you prefer? Beach or mountains?' );

if (score === 0) {
    alert( 'you are parseInt()' );
} else if (score < 3) {
    alert( 'you are .toLowerCase()' );
} else if (score >= 3) {
    alert( 'you are console.log()' );
}