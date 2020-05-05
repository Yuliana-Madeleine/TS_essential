function log(message){
    console.log(message);
}

var message = "Hello y world";

/*log(message);*/

// to run into console write: node main.js
// to remove the js file then after to compile again ts -> js : rm main.js (remove main.js)
// to run both: tsc main.ts | node main.js
//What new on ES6

function dosomethingjs(){// initial scope/ambito
    for(var i = 0; i<5;i++){
        console.log(i);
    }
    console.log('Here:' + i);
}//end scope/ambito

/*dosomethingjs();*/

function dosomethingts(){// initial scope/ambito
    for(let i = 0; i<5;i++){
        console.log(i);
    }
    //console.log('Here:' + i);
}//end scope/ambito
dosomethingts();

/*Types on Typescript*/

//let count = 5;
//count = 'a';// cant cahange the type because was already denined as a number  because the first assignation
