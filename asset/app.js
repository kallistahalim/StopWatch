//GLOBAL VARIABLES
var numWin = 0;
var numLose = 0;
var wordToGuess = ["Coco", "Puma", "Treats", "Bandana", "Cuddles", "Pets", "Mommy", "Dog", "Ball", "Cookies", "Ice Cream"];
var numberOfGuess = 9;
var yourGuess = [];
var wordDisplay = [];
var computerChoice = wordToGuess[Math.floor(Math.random() * wordToGuess.length)].toUpperCase();
var wordToLetters = computerChoice.split("");


//START THE GAME

function startGame() {
    //set up initial state before game is played
    computerChoice = wordToGuess[Math.floor(Math.random() * wordToGuess.length)].toUpperCase();
    wordToLetters = computerChoice.split("");
    wordDisplay = [];
    numberOfGuess = 9;
    yourGuess = [];

    //create _ _ _ _ based on how many letters in the word
    for (var i = 0; i < wordToLetters.length; i++) {
        wordDisplay.push("_");
    }

    //print innerHTML
    document.querySelector("#win").innerHTML = numWin;
    document.querySelector("#lose").innerHTML = numLose;
    document.querySelector("#wordToGuess").innerHTML = wordDisplay.join(" ");
    document.querySelector("#numberOfGuess").innerHTML = numberOfGuess;
    document.querySelector("#yourGuess").innerHTML = yourGuess;

    //tests
    console.log("this is computerChoice: " + computerChoice);
    // console.log("this is wordToLetters: " + wordToLetters);
    // console.log("this is wordDisplay: " + wordDisplay);
}

startGame();

document.onkeypress = function (event) {
    var letter = event.key.toUpperCase();

    for (var j = 0; j < yourGuess.length; j++) {
        if (yourGuess[j] === letter) {
            return false;
        }
    }

    yourGuess.push(letter);
    document.querySelector("#yourGuess").innerHTML = yourGuess;

    numberOfGuess--;
    document.querySelector("#numberOfGuess").innerHTML = numberOfGuess;


    for (var i = 0; i < wordToLetters.length; i++) {

        if (letter === wordToLetters[i]) {
            wordDisplay[i] = letter;
            // console.log("this is wordDisplay while we are playing: " + wordDisplay);
            // console.log("this is wordToLetters while we are playing: " + wordToLetters);
            document.querySelector("#wordToGuess").innerHTML = wordDisplay.join(" ");
        }
    }

    if (wordDisplay.join("") === wordToLetters.join("")) {
        numWin++;
        document.querySelector("#win").innerHTML = numWin;

        setTimeout(function () {
            var confirmResult = confirm("You Win! Play Again?");
            if (confirmResult) {
                startGame();
            };
        }, 100);
    }

    if (numberOfGuess === 0) {
        numLose++;
        document.querySelector("#lose").innerHTML = numLose;
        startGame();
    }

}