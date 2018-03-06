
// Variables
var userLetter = document.getElementById("user-letter");
var computerWord = document.getElementById("computer-word");
var computerPick = document.getElementById("computer-pick");
var guessesLeft = document.getElementById("guesses-left");
var guessesSoFar = document.getElementById("guesses-sofar");
var gameLock = true; //initialized Game to be ready to Start
var guessList = [];
var guessSoFarArray = [];
var word;
var wordArray= [];
var guessCount;
var totalGuessLeft = 10;


// FUNCTIONS
function checkLetterInArray(letter, array) {
    console.log("made to the CheckLetterInArray function")
    var x = 0;
    for (var i = 0; i < array.length; i++) {
        if (letter == array[i]) {
            x++;
        }
    }
    console.log(" Value of X=" + x);
    if (x > 1) {
        console.log("Return true. Value of X=" + x);
        return true;
    }
    else { return false };
}

function wordGenerator() {//Random word is genereated from an array for the user to guess
    GameWordArray = new Array(7);
    GameWordArray[0] = "monitor";
    GameWordArray[1] = "program";
    GameWordArray[2] = "application";
    GameWordArray[3] = "keyboard";
    GameWordArray[4] = "javascript";
    GameWordArray[5] = "gaming";
    GameWordArray[6] = "network";
    GameWordArray[7] = "programming";
    GameWordArray[8] = "functions";
    GameWordArray[9] = "operating";
    GameWordArray[10] = "systems";
    randno = Math.floor(Math.random() * GameWordArray.length);
    console.log("RANDOM WORD GENERATED-->" + GameWordArray[randno]);
    return GameWordArray[randno];
}

function setGameWord() {
    word = wordGenerator();
    console.log("Word First Selected by Computer:" + word);
    wordArray = word.split(''); // empty string separator
    console.log("Word Array:" + wordArray + " Word Array Leght:" + wordArray.length);
    for (var i = 0; i < wordArray.length; i++) {
        guessList[i] = "_";
    }
}

function resetGame() {
    gameLock = false; //initialized Game to be ready to Start
    console.log("Value of gameLock after resetGame:" + gameLock);
    guessList=[];//clear the guessList before setting the Game Word 
    setGameWord();
    guessSoFarArray = [];
    guessesSoFar.textContent = guessSoFarArray;
    console.log("Guess List:" + guessList);

    //Showing the Word
    computerWord.textContent = guessList;
    totalGuessLeft = 10;
    guessCount = wordArray.length;
    console.log("Guess Count:" + guessCount);
}
function startGame() {
    gameLock = false;
    resetGame(); //code smell that I have to improve if I have time.
    console.log(gameLock);
}


//Updating html Div's 
computerWord.textContent = guessList;


// Next, we give JavaScript a function to execute when onkeyup event fires.
document.onkeyup = function (event) {
    console.log(event);
    console.log("Value of gameLock Before the IF Lock:" + gameLock)

    if (!gameLock) {
        console.log(gameLock != false);
        userLetter.textContent = event.key;
        computerWord.textContent = guessList;
        // guessesLeft.textContent = missCount;
        guessesLeft.textContent = totalGuessLeft - 1;
        // var rand = alphabet[Math.floor(Math.random() * alphabet.length)];
        console.log("Guess Count:" + guessCount);
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
                console.log("before CheckLetterInArray Function: " + userLetter.textContent + " " + guessSoFarArray);

                //Check if the Letter entered has been entered before or not
                if (checkLetterInArray(userLetter.textContent, guessSoFarArray)) {
                    // guessCount--;
                    console.log("*** Not UNIQUE LETTER, NO GuessCount-- ");
                    // console.log("Remaining count of letter to guess after matching with: " + userLetter.textContent + " --> " + guessCount);
                }
                else {
                    guessCount--;
                    console.log("Remaining count of letter to guess after matching with: " + userLetter.textContent + " --> " + guessCount);
                }
            }
            else {
                // guessSoFarArray.push(userLetter.textContent);
                guessesSoFar.textContent = guessSoFarArray;
                console.log("NOPE no Match with This User Letter:" + userLetter);
            }
        }
        totalGuessLeft--;
        console.log("#### Total Guess Left so far:" + totalGuessLeft);

        if (guessCount == 0) {
            console.log("##### WON ######");
            computerPick.textContent = "You Won. You guessed:" + word;
            // resetGame();
            gameLock = true;
            console.log("### WON - GAME IS LOCK:" + gameLock);
        }
        else if (totalGuessLeft == 0) {
            guessesLeft.textContent = "You Lost!!! Game Over";
            gameLock = true;
            console.log("### LOST - GAME IS LOCK:" + gameLock);

        }
    }
    else {
        console.log("###GAME OVER AND LOCK")

    }
}

