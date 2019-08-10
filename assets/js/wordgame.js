/* --------------------------------------------
    WORD GUESS GAME - HOMEWORK 3 ASSIGNMENT - FSF BOOTCAMP - 8/10/2019
    PSEUDO SCRIPTING (I know, I know ... it should be inline (but I hate that))

    1. Create a WORDBANK array to store possible words.
        a. Display randomly CHOSEN index within WORDBANK
        b. Display individual letters of WORDBANK index, assign to WORDLETTER 
    2. Capture user's KEYSTROKE.
    3. Compare KEYSTROKE to WORDLETTER.
        a. Match == display MATCHED character in it's place via CSS & increase SCORE & message of SUCCESS
        b. No Match == reduce number of guesses? or infinite guesses? & Display message of DOOM & store guess in GRAVEYARD

    // VARIABLE BANK
        wordBank = array of words
        chosen = current word
        userGuess = user's guess
        wordletter = individual letters in WORDBANK index item
        matched = successfully matched letters
        graveyard = unmatched guesses so far

-------------------------------------------- */
// JQuery function that allows js to start its work once the page is fully rendered.
// NOTE: Setting scripts to load via "defer" also accomplishes this. - SLF
$(document).ready(function() {

// 1. Create a WORDBANK array to store possible words.
    var wordBank = ["terror","nightmare","horror","shreik","manbuns","decaf","midnight","headstone","cthulu","wraith","bloodbath"];
    var underline = ['_ '];

    // a. Display randomly CHOSEN index within WORDBANK
    var chosen = wordBank[Math.floor(Math.random() * wordBank.length)];
    var gameHold = document.getElementById('gameContent');
    var blankHold = document.getElementById('blankspace');

    var node = document.createElement("P");                 
    var textnode = document.createTextNode(chosen);         
    node.appendChild(textnode);                              
    gameHold.appendChild(node); 

    // b. Display individual letters of WORDBANK index, assign to WORDLETTER 
    var wordletter = chosen.length;
    // c. Display individual underlines matching WORDLETTER 
    for (var i = 0; i < wordletter; i++) {
        var pwrapper = document.createElement("P");
        var dashString = document.createTextNode(underline);
        pwrapper.appendChild(dashString);
        blankHold.appendChild(pwrapper);  
    }
// 2. Account for score, remaining letters, and increments
    var lettersLeft = chosen.length;

    while (lettersLeft > 0) {
        
        var userGuess = prompt("Care to venture a letter guess?").toLowerCase();
        if (userGuess == null) {
            alert("Try again, chump. Invalid entry.")
        }
        else if (userGuess.length !== 1) {
            alert("Pick ONE letter; no more, no less.")
        }
        else {
            for (var j = 0; j < chosen.length; j++) {
                if (chosen[j] == userGuess) {
                    wordBank[j] = userGuess;
                    lettersLeft--;
                    alert('Good Job ' + userGuess + " is in the word!");
                }     
            }
        }
    }
});