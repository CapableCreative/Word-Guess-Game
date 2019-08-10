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
        WORDBANK = array of words
        CHOSEN = current word
        KEYSTROKE = user's guess
        WORDLETTER = individual letters in WORDBANK index item
        MATCHED = successfully matched letters
        GRAVEYARD = unmatched guesses so far

-------------------------------------------- */
// JQuery function that allows js to start its work once the page is fully rendered.
// NOTE: Setting scripts to load via "defer" also accomplishes this. - SLF

$(document).ready(function() {

    var wordBank = ["terror","nightmare","horror","shreik","manbuns","decaf","midnight","headstone","cthulu","wraith","bloodbath"];
    var chosen = wordBank[Math.floor(Math.random()*wordBank.length)];
    var gamers = document.getElementById('gameContent');

    var node = document.createElement("P");                 // Create a <li> node
    var textnode = document.createTextNode(chosen);         // Create a text node
    node.appendChild(textnode);                              // Append the text to <li>
    document.getElementById("gameContent").appendChild(node);     // Append <li> to <ul> with id="myList" 

});