var word = "LERNIA".split("");
var copyWord = word.slice();

var guessLimit = 9;
var guess = 0;
var guessed = false;
var actualChar;

function tryGuess(char) {
    actualChar = char;
    guessed = false;
    word.forEach(check);
    checkWon();
    checkLoose();
}

function check(item, index) {
    if (item === actualChar) {
        word.splice(index, 1);
        guessed = true;
        console.log("guessed: " + actualChar);
    }
}

function checkWon() {
    if (word.length === 0) {
        console.log("You Won");
        console.log("The word is: " + copyWord.join(""));
    }
}

function checkLoose() {
    if (guessed === false) {
        guess++;
        console.log("planka " + guess + " av " + guessLimit);
        if (guess === guessLimit) {
            console.log("Game over");
        }
    }
}

tryGuess("I");
tryGuess("R");
tryGuess("A");
tryGuess("N");
tryGuess("L");
tryGuess("E");
//tryGuess("X");
//tryGuess("X");
//tryGuess("X");
//tryGuess("X");

