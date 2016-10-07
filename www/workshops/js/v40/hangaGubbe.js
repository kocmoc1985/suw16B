var word = ["L", "E", "R", "N", "I", "A"];

var guessLimit = 9;
var guess = 0;

function tryGuess(char) {
    var guessed = false;
    for (i = 0; i < word.length; i++) {
        if (word[i] === char) {
            word.splice(i, 1);
            guessed = true;
            console.log("guessed: " + char);
            if (word.length === 0) {
                console.log("You Won");
            }
        }
    }
    //
    //
    if (guessed === false) {
        guess++;
        console.log("planka " + guess + " av " + guessLimit);
        if (guess === guessLimit) {
            console.log("Game over");
        }
    }
}

tryGuess("X");
tryGuess("F");
tryGuess("I");
tryGuess("R");
tryGuess("A");
tryGuess("N");
tryGuess("L");
tryGuess("Ö");
tryGuess("Ö");
tryGuess("Ö");
tryGuess("Ö");
tryGuess("Ö");
tryGuess("Ö");
tryGuess("Ö");


