var beatleWordList = [
"hey jude", "walrus", "hello goodbye", "lennon", "revolution", "yellow submarine", 
"blackbird", "beatles", "abbey road", "yesterday", "paperback writer", "starr", "mccartney", "liverpool", 
"sgt pepper", "white album", "prudence", "rocky raccoon", "honey pie", "good night", "b side", 
"vinyl", "helter skelter", "harrison", "julia", "warm gun", "glass onion", "penny lane", "strawberry fields", 
"maggie mae", "kaleidoscope eyes", "marmalade skies", "tangerine trees", "nowhere man", "groovy",
]

const maxTries = 10;

var guessedLetters = [];
var chosenWordIndex;
var guessingWord = []; //an array that stores the letters that have been correctly guessed in the secret word
var remainingGuesses = 0;
var hasFinished = false;
var wins = 0;
var losses = 0;

//Reset the game-level variables
function resetGame() {
    remainingGuesses = maxTries;

    //Randomly select a number between 0 and the length of the words array
    // Use the guessingWord array to initialize underscores that get replaced as correct letters are guessed

    currentWordsIndex = Math.floor(Math.random() * (beatleWordList.length));

    guessedLetters = [];
    guessingWord = [];

    for(var i=0; i<beatleWordList[currentWordsIndex].length; i++) {
        guessingWord.push("_");
    }

    document.getElementById("pressKeyTryAgain").style.cssText = "display: none";

    //show display
    updateDisplay();
};

//Updates the display on the HTML page
function updateDisplay() {
    document.getElementById("winCounter").innerText = wins;
    
    //display how much of the word we have guesses so far
    //printing the array adds a comma so we concantenate the string from each value in the array
    var guessingWordText = "";
    for(var i=0; i<guessingWord.length; i++) {
        guessingWordText += guessingWord[i];
    }
    document.getElementById("currentWord").innerText = guessingWordText;
    document.getElementById("remainingGuesses").innerText = remainingGuesses;
    document.getElementById("guessedLetters").innerText = guessedLetters;

};

//searches the secret word to find all instances of a letter
//if letter not found in word, subtract a remaining guess
//if letter found, replace underscores with letters in secret word
function evaluateGuess(letter) {
    var positions = [];


    for(var i=0; i<beatleWordList[currentWordsIndex].length; i++) {
        if(beatleWordList[currentWordsIndex][i] === letter) {
            positions.push(i);
        }
    }

    if(positions.length <= 0) {
        remainingGuesses--;
    } else {
    //loop through the secret word and replace _ with a letter
        for(var i=0; i<positions.length; i++) {
            guessingWord[positions[i]] = letter;
        }
    }
};

function checkWin() {
    if(guessingWord.indexOf("_") === -1) {
        alert("Far out! You win!");
        document.getElementById("pressKeyTryAgain").style.cssText= "display:block";
        wins++;
        hasFinished = true;
    
    }
};

function checkLoss() {
    if(remainingGuesses <= 0) {
        alert("Bummer, you lose.");
        document.getElementById("pressKeyTryAgain").style.cssText= "display:block";
        losses++;
        hasFinished = true;
    }
}

//this function compares the key pressed to the secret word
function makeGuess(letter) {
    if(remainingGuesses > 0) {
        if(guessedLetters.indexOf(letter) === -1) {
            guessedLetters.push(letter);
            evaluateGuess(letter);
        }
    }
};

document.onkeyup = function(event) {
    //if we finish a game, don't count the keystroke as a guess, but instead a game restart
    if(hasFinished) {
        resetGame();
        hasFinished = false;
    } else {
        //check that a-z was pressed
        if(event.keyCode >=65 && event.keyCode <=90) {
            makeGuess(event.key.toUpperCase());
            updateDisplay();
            checkWin();
            checkLoss();
        }
    }
};
  




// var chosenWord = "";
// var letterInChosenWord = [];
// var numBlanks = 0;
// var blanksAndCorrectLetters = [];
// var wrongGuesses = [];

// var winCounter = 0;
// var lossCounter = 0;
// var numGuesses = 10;

// function startGame() {
//     wrongGuesses = [];
//     console.log("this is a wrong guess in startGame", wrongGuesses);
//     numGuesses = 10;
//     blanksAndCorrectLetters = [];

//     chosenWord = beatleWordList[Math.floor(Math.random() * beatleWordList.length)];
//     letterInChosenWord = chosenWord.split("");
//     numBlanks = letterInChosenWord.length;
//     console.log(chosenWord);
//     console.log(numBlanks);

//     for(var i=0; i<numBlanks; i++) {
//         blanksAndCorrectLetters.push("_");
//     }

//     console.log(blanksAndCorrectLetters);
//     console.log("Hello line 40")
//     document.getElementById('word-blank').innerHTML = this.blanksAndCorrectLetters;
//     document.getElementById('guesses-left').innerHTML = numGuesses;

// }

// function checkLetters(letter) {
// //Compare the letter the player picks to the secret word, need a conditional
// //statement to determine if the player picks a letter in the word. If not, do
// //something else

// var letterInWord = false;

// for(var i=0; i<numBlanks; i++) {
//     if(chosenWord[i] === letter) {
//         letterInWord = true;
//     }
// }

// if(letterInWord) {
//     for(i=0; i<numBlanks; i++) {
//         if(chosenWord[i] === letter) {
//             blanksAndCorrectLetters[i] = letter;
//         }
//     }
// } else {
//     numGuesses--;
//     wrongGuesses.push(letter)
// }

//  //check to see if letter is already in the letters guess array.   

// }
// //Update HTML with letters that are in secret word, guesses remaining, show letters guessed, show if game was won or not
// function roundComplete() {
//     document.getElementById("word-blank").innerHTML = blanksAndCorrectLetters.join(" ");
//     document.getElementById("guesses-left").innerHTML = numGuesses;
//     document.getElementById("wrong-guesses").innerHTML = wrongGuesses.join(" ");

//     console.log(letterInChosenWord);
//     console.log(blanksAndCorrectLetters);

//     if(letterInChosenWord.join(" ") === blanksAndCorrectLetters.join(" ")) {
//         winCounter++;
//         alert("Far Out! You win!");
//         document.getElementById("win-counter").innerHTML = winCounter;
//         startGame();

//     } else if(numGuesses === 0) {
//         document.getElementById("loss-counter").innerHTML = lossCounter++;
//         document.getElementById("wrong-guesses").innerHTML = "";
//         alert("Bummer.... You lost.");
//         startGame();
//     }


// }
// startGame();
// document.onkeyup = function(event) {
//     var letterGuessed = String.fromCharCode(event.keyCode).toUpperCase();
//     console.log("this is the letter we typed", letterGuessed);
//     checkLetters(letterGuessed);
//     roundComplete();
// }

// //to set only a-z pressed --if(event.keyCode >= 65 && event.keyCode <= 90) {


// //document.onkeydown = function(event) {
//     // If we finished a game, dump one keystroke and reset.
  
// // var choice = Math.floor(Math.random()*beatleWordList.length);
// // var answer = beatleWordList[choice];
// // var myLength = answer.length;
// // var display = [myLength];
// // var win = myLength;
// // var letters = answer.split('');
// // var attemptsLeft = 10;
// // var output = "";
// // var userLetter = "";

// // var setup = function() {
// //     for (var i=0; i<answer.length; i++)
// //     {
// //         display[i] = "_ ";
// //         output = output + display[i];
// //     }
// //     document.getElementById("game").innerHTML=output;
// //     output = "";
// // }

// // var submit = function()
// // {
// //     output = "";
// //     userLetter=$("letter").value;
// //     $("letter").value = "";

// //     for (var c=0; c<answer.length; c++) {
// //         return(letters[c]);
// //         if(userLetter.toUpperCase() == letters[c])
// //         {
// //             display[c] = userLetter.toUpperCase();
// //             win--;
// //         }
// //             output = output + display[c] + " ";
// //     }
// //     document.getElementById("game").innerHTML=output;
// //     output="";
// //     attemptsLeft--;

// //     if (win < 1) {
// //         document.getElementById("guesses").innerHTML = alert("Far out! You Win!");
// //     } else if (attemptsLeft < 1) {
// //         document.getElementById("guesses").innerHTML = alert("Bummer... You lose.");
// //     } else {
// //         document.getElementById("guesses").innerHTML = "<p>You have " + attemptsLeft + " guesses left</p>";
// //     }
// // }

// // // window.onload = function() {
// // //     setup();
// // //     $("submit").onclick = submit;}