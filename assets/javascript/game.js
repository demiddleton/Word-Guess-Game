//Create an array of songs
var songChoices = ["Abracadabra", "Physical", "Lady", "Endless Love"];
//Choose songs randomly
var randSong = songChoices[Math.floor(Math.random() * songChoices.length)]
//Create dashes based on length of song title
//Get users guess
var x = [];

var userGuess = event.key;

x.push(userGuess);
//Check if guess is right
//If right, push to the right array
//Continue until all letters are guessed or user runs out of guesses
//If wrong guess push to wrong array
//If user guesses all letters, display the matching image
//If user does not guess song, display word you lose.