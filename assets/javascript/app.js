//Array of Computer's possible choices.
var computerChoices = ["r", "p", "s"];

//Array of User's possible choices.
var userGuess = ["r", "p", "s"];

//* Only two users can play at the same time.-->

//Both players pick either `rock`, `paper` or `scissors`. After the players make their selection, the game will tell them whether a tie occurred or if one player defeated the other. 

​​
//* The game will track each player's wins and losses. -->
​
//* Throw some chat functionality in there! No online multiplayer game is complete without having to endure endless taunts and insults from your jerk opponent.-->
​
//* Styling and theme are completely up to you. Get Creative!-->
​
//* Deploy your assignment to Github Pages. -->

//Create variables to hold the numbers of wins, losses, ties.
var wins = 0;
var losses = 0;
var ties = 0;

//Variables displayed in the designated area in the HTML.
var directionsText = document.GetElementById("directions-text");
var userChoiceText = document.getElementById("userchoice-text");
var computerChoiceText = document.getElementById("computerchoice-text");
var winsText = document.getElementById("wins-text");
var lossesText = document.getElementById("losses-text");
var tiesText = document.getElementById("ties-text");

//Capture User Keystrokes.
document.onkeyup = function(event) {

    //Variable for the key User pressed.
    var userGuess = event.key;

    // Variable for the Computer's Guess to be a random guess of the available array choices.
    var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

    // This logic determines the outcome of the game (win/loss/tie), and increments the appropriate number
    if ((userGuess === "r") || (userGuess === "p") || (userGuess === "s")) {

        if ((userGuess === "r" && computerGuess === "s") ||
            (userGuess === "s" && computerGuess === "p") ||
            (userGuess === "p" && computerGuess === "r")) {
            wins++;
        } else if (userGuess === computerGuess) {
            ties++;
        } else {
            losses++;
        }

        // Hide the directions
        directionsText.textContent = "";

        // Display the user and computer guesses, and wins/losses/ties.
        userChoiceText.textContent = "You chose: " + userGuess;
        computerChoiceText.textContent = "The computer chose: " + computerGuess;
        winsText.textContent = "wins: " + wins;
        lossesText.textContent = "losses: " + losses;
        tiesText.textContent = "ties: " + ties;
    }
};