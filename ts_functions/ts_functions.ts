/*let toshow = function(messageTest){
    console.log(messageTest);
}//Ussualy to javascript*/ 

let doLog = (messageTest) => {
    console.log('Way 1:' + messageTest);
}

doLog('hi hi');

// Typescript this is call:ARROW FUNCTIONS
// c#: this is call LAMBDA EXPRESION
let doAgain = (messageTest2) => console.log('Way 2:' + messageTest2);
//let doAgain = messageTest2 => console.log('Way 2:' + messageTest2);// is valid not use parenthesis when hae only one parameter

let doit = () => console.log('No parameter function');
doAgain('Hello hello');