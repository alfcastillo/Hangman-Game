
// Let's start by grabbing a reference to the <span> below.
var userLetter = document.getElementById("user-letter");
var computerWord = document.getElementById("computer-word");
var guessesLeft = document.getElementById("guesses-left");
var guessesSoFar = document.getElementById("guesses-sofar");

// wins.textContent = 0;
// loses.textContent = 0;
// var alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
// console.log(alphabet);
//Split string into array
var gameLock = false;
var word = 'programming';
var wordArray = word.split(''); // empty string separator
var guessList = [];
var guessSoFarArray = [];
for (var i = 0; i < wordArray.length; i++) {
    guessList[i] = "_";
}

console.log("Word First Selected by Computer:" + word);
console.log("Word Array:" + wordArray + " Word Array Leght:" + wordArray.length);
console.log("Guess List:" + guessList);

//Showing the Word
computerWord.textContent = guessList;
var guessCount = wordArray.length;
var missCount = wordArray.length;

// Next, we give JavaScript a function to execute when onkeyup event fires.
// if (gameLock != false) {
    document.onkeyup = function (event) {

        userLetter.textContent = event.key;
        computerWord.textContent = guessList;
        guessesLeft.textContent = missCount;
        // var rand = alphabet[Math.floor(Math.random() * alphabet.length)];
        console.log("Guess Count:" + missCount);
        console.log("letter entered by Player:" + userLetter.textContent);
        console.log("Word Array Status:" + computerWord.textContent);
        guessSoFarArray.push(userLetter.textContent);
        console.log("guesses so far array:" + guessSoFarArray);
        for (var i = 0; i < wordArray.length; i++) {
            console.log("Word In Array Letter to check:" + wordArray[i]);
            // guessesLeft.textContent--;
            if (userLetter.textContent === wordArray[i]) {
                console.log("Match with This User Letter:" + userLetter);
                guessList[i] = userLetter.textContent;
                //    guessSoFarArray.push(userLetter.textContent);
                computerWord.textContent = guessList;
                guessesSoFar.textContent = guessSoFarArray;

            }
            else {
                // guessSoFarArray.push(userLetter.textContent);
                guessesSoFar.textContent = guessSoFarArray;
                console.log("NOPE no Match with This User Letter:" + userLetter);
            }
        }
        missCount--;

        if (missCount == "-1") {
            guessesLeft.textContent = "Dude you are dead!!! Game Over";
            gameLock = true;
        }
    }
// }

