// TypeScript first program
var Greeting = /** @class */ (function () {
    function Greeting() {
    }
    Greeting.prototype.greet = function () {
        console.log("Hello World");
        return "I am return from greeting method()";
    };
    return Greeting;
}());
var obj = new Greeting();
// console.log(obj.greet())
// let num:undefined = undefined;
// Different dataType in TypeScript
var CheckDataType = 'any data type';
var number = 100;
var personName = 'Developer';
var bool = true;
// console.log('DataType is=', typeof bool)
// console.log("Data is = ", bool)
// check function return datatype
function RollId(number) {
    return number;
}
var Roll = RollId(900248);
console.log(Roll);
