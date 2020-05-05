var a;
var b;
var c;
var d;
var e = [1, 2, 3];
var f = [1, true, 'a', false];
/*Type: enum */
var ColorRed = 0;
var ColorGreen = 1;
var ColorBlue = 2;
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
;
var background = Color.Red;
console.log('background: ' + background);
/************Intellisence**************/
var message1; //Initial type = any
message1 = 'abc';
var endwithC = message1.endsWith('c'); // Usual way to asociate type to a variable(message) to access the intellisences options
var anotherway = message1.endsWith('c'); // other way to explain the type asocciated to a variable(message) to access the intellisences options
console.log('End with c ?' + endwithC + 'or end with c, another way works?' + anotherway);
