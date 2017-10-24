'use strict';

const favSeason = prompt( 'What is your favorite season?' );
const favVacation = prompt( 'Which vacation spot do you prefer? Beach or mountains?' );

if ( favSeason.toLowerCase() === 'spring' && favVacation.toLowerCase() === 'beach' ) {
    alert( 'you are parseInt()' );
} else if ( favSeason.toLowerCase() === 'spring' && favVacation.toLowerCase() === 'mountains' ) {
    alert( 'you are .toLowerCase()' );
} else if ( favSeason.toLowerCase() === 'fall' || favSeason.toLowerCase() === 'autumn' ) {
    if ( favVacation.toLowerCase() === 'beach' ) {
        alert( 'you are console.log()' );
    } else if ( favVacation.toLowerCase() === 'mountain' ) {
        alert( 'you are typeof()' );
    }
} else if ( favSeason.toLowerCase() === 'summer' ) {
    alert( 'you are alert()' );
} else if ( favSeason.toLowerCase() === 'winter' ) {
    alert(  'you are prompt()' );
} else {
    alert( 'you are Math.random()' );
}