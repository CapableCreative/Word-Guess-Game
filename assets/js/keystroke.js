       
        if(typeof console == 'undefined'){
                console = {};
                console.log = function(arg){return true;};
            }
            var userGuess;
            $(document).keyup(function(userGuess){
                //find out which key was pressed
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
                
                console.log('User Guess is' + userGuess);
            
});

