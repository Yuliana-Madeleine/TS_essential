let a: number;
let b: boolean;
let c: string;
let d: any;
let e: number[] = [1,2,3];
let f: any[] = [1, true, 'a', false];
/*Type: enum */
const ColorRed = 0;
const ColorGreen = 1;
const ColorBlue = 2;
enum Color {Red = 0, Green= 1, Blue = 2};

let background = Color.Red;
console.log('background: ' + background);

/************Intellisence**************/

let message1; //Initial type = any
message1 = 'abc';

let endwithC = (<string>message1).endsWith('c'); // Usual way to asociate type to a variable(message) to access the intellisences options
let anotherway = (message1 as string).endsWith('c'); // other way to explain the type asocciated to a variable(message) to access the intellisences options

console.log('End with c ?' + endwithC + 'or end with c, another way works?' + anotherway);

//check endsWith