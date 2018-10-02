//Choosing a random word from the word bank
var beatleSongList = [
    "Hey Jude", "Here Comes the Sun", "Penny Lane", "I Am the Walrus", "While My Guitar Gently Weeps",
]

var song = beatleSongList[Math.floor(Math.random() * beatleSongList.length)];

//Creating the answer array to fill with _ that match the number of letters in a word
// How to account for spaces???

var answerArray = [];
for(var i=0; i<song.length; i++) {
    answerArray[i] = "_";
}

var remainingLetters = song.length;

//Game Loop

//show the player's guesses
while (remainingLetters > 0) {
    report(answerArray.join(""));
}

//Player input
var guess = document.getElementById("exampleFormControlTextarea1")

document.onkeyup = function(event) {
    guess.textContent = event.key;
}
//Get a guess from the player
if (guess.length !== 1) {
    alert("Chill! Enter one letter at a time.");
} else {
//Update the game with the guess
    for (var j=0; j<song.length; j++) {
        if (song[j] === guess) {
            answerArray[j] = guess;
            remainingLetters--;
        }
    }
}
//End of the game loop

//Show the answer and win or loss response
alert(answerArray.join(" "));
alert("Far out! The answer was " + song);
//var name = beatleSongList.toUpperCase to get all the letters to be capital during the word guess