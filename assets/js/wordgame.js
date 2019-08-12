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

// ----- 1. Create a WORDBANK array to store possible words.
var wordBank = ["terror","nightmare","horror","shreik","manbuns","decaf","midnight","headstone","cthulhu","wraith","bloodbath"];
// ---------- a. Display randomly CHOSEN index within WORDBANK
    var chosen = wordBank[Math.floor(Math.random() * wordBank.length)]; 
    var blankHold = document.getElementById('blankspace');
// ---------- b. Display individual letters of WORDBANK index, assign to WORDLETTER 
    var wordletter = chosen.length;
// ---------- c. Display individual underlines matching WORDLETTER 
    for (var i = 0; i < wordletter; i++) {
        var pwrapper = document.createElement("P");
        var matchwrapper = document.createElement("SPAN");
        var matchedLetter = document.createTextNode(chosen[i]);
        pwrapper.appendChild(matchedLetter);
        blankHold.appendChild(matchwrapper);  
        matchwrapper.appendChild(matchedLetter);
        matchwrapper.setAttribute("class", chosen[i]);
    }

// 2. Account for score, remaining letters, and increments
    var lettersLeft = chosen.length;
    while (lettersLeft > 0) {      
        $(document).keyup(function(userGuess){
            switch(userGuess.keyCode){
                case 65	:	userGuess = 'a';	break;	// a
                case 66	:	userGuess = 'b';	break;	// b
                case 67	:	userGuess = 'c';	break;	// c
                case 68	:	userGuess = 'd';	break;	// d
                case 69	:	userGuess = 'e';	break;	// e
                case 70	:	userGuess = 'f';	break;	// f
                case 71	:	userGuess = 'g';	break;	// g
                case 72	:	userGuess = 'h';	break;	// h
                case 73	:	userGuess = 'i';	break;	// i
                case 74	:	userGuess = 'j';	break;	// j
                case 75	:	userGuess = 'k';	break;	// k
                case 76	:	userGuess = 'l';	break;	// l
                case 77	:	userGuess = 'm';	break;	// m
                case 78	:	userGuess = 'n';	break;	// n
                case 79	:	userGuess = 'o';	break;	// o
                case 80	:	userGuess = 'p';	break;	// p
                case 81	:	userGuess = 'q';	break;	// q
                case 82	:	userGuess = 'r'; 	break;	// r
                case 83	:	userGuess = 's';	break;	// s
                case 84	:	userGuess = 't';	break;	// t
                case 85	:	userGuess = 'u';	break;	// u
                case 86	:	userGuess = 'v';	break;	// v
                case 87	:	userGuess = 'w';	break;	// w
                case 88	:	userGuess = 'x';	break;	// x
                case 89	:	userGuess = 'y';	break;	// y
                case 90	:	userGuess = 'z';	break;	// z
            }  
            correctWord(userGuess);
            if (userGuess == "a" ||userGuess == "b" ||userGuess == "c" ||userGuess == "d" ||userGuess == "e" ||userGuess == "f" ||userGuess == "g" ||userGuess == "h" ||userGuess == "i" ||userGuess == "j" ||userGuess =="k" ||userGuess == "l" ||userGuess == "m" ||userGuess == "n" ||userGuess == "o" ||userGuess == "p" ||userGuess == "q" ||userGuess == "r" ||userGuess == "s" ||userGuess == "t" ||userGuess == "u" ||userGuess == "v" ||userGuess == "w" ||userGuess == "x" ||userGuess == "y" ||userGuess == "z"){      
                var lgrave = document.getElementById('graveyard');
                var ltext = document.createTextNode(userGuess);
                lgrave.appendChild(ltext);
            }               
        });
            var chLength = chosen.length
            if (lettersLeft > 0) {    
                var lettCount = document.getElementById('letterCounter');
                var lettCountCurrent = document.createTextNode('This word is ' + chLength + ' letters long');
                lettCount.appendChild(lettCountCurrent);
            }
        if (userGuess.length > 1) {
            alert("Something went wrong; We'll just say you DIED. HAHAHAHA!")
        }
        function correctWord(x){
            for (var i = 0; i < chosen.length; i++) {
                if ((chosen[i] === x) || (x.length > 1)) {
                    document.getElementsByTagName('span')[i].style.top = '0px';
                    document.getElementsByTagName('span')[i].style.color = '#F9F3B8';
                    
                }
            }
        }
    }
   /* else if (chosen[i] !== x){
        var ugGetDiv = document.getElementById('messageToPlayer');
        var ugSpan = document.createElement('SPAN');
        var ugTextNode = document.createTextNode(x);
        ugGetDiv.appendChild(ugSpan);
        ugSpan.appendChild(ugTextNode);    
        console.log(x)     
    }*/