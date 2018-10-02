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

//use report but then need to get the answer on the page--text.content?
//show the player's guesses
while (remainingLetters > 0) {
    report(answerArray.join(""));
}

//Player input
var guess = document.getElementById("guessTextArea")
//var name = beatleSongList.toUpperCase to get all the letters to be capital during the word guess