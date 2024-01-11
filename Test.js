//Adding First and last name variables
let firstName = "Joe";
let lastName = "Amos";

//submitting variables to the console
console.log(`Hello ${firstName} ${lastName}`);

/*This is a multi line comment so that 
*i know you can do it
*/

let handiCap = "20"

console.log (`Your Handicap is ${handiCap}`);

//variable using two existing
let fullName = `${firstName} ${lastName}`;
console.log (fullName);

//mutliple line variable
let bio = `Line 1\nLine 2\n`;
console.log (bio);

let length = handiCap.length;
console.log(`Quote Length: ${length}`);

//define booleans
let trueValue = true;
console.log(trueValue);

//Using the Not operator
let notFalse = !false;
console.log(notFalse);

//Using numbers
let num1 = 6;
let num2 = -1000;
let num3 = 4.3;

//defining big and small number
let numb4= 144444444444444444444444444;
console.log (numb4);

//what happens when you don't give a variable a value
let x;
console.log (x);

//How do we set a variable to a purposefully empty value
let manager= null;
console.log(manager);

//Learning about objects literal
let obj1 = {};

obj1. fName = "Joe";
obj1. lName = "Amos";
obj1.isActive = true;
console.log(obj1);

let obj3 = {
    fName: "Joe",
    lName: "Amos",
    isActive: true, 
};
console.log(obj3);

//accessing properties from an objext
console.log(`First Name: ${obj3.fName}`);

//working woth dates
let date1 = new Date();
console.log(date1);

//Learning about Classes
