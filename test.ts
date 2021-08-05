// TypeScript first program

class Greeting{
    greet():string{
        console.log("Hello World");
        return "I am return from greeting method()"
    }
}
const obj = new Greeting();
// console.log(obj.greet())
// let num:undefined = undefined;

// Different dataType in TypeScript
let CheckDataType:any = 'any data type';
let number:number = 100;
const personName:string = 'Developer';
const bool:boolean = true;

// console.log('DataType is=', typeof bool)
// console.log("Data is = ", bool)

// check function return datatype

function RollId(number):number{
    return number
}
const Roll = RollId(900248);
console.log(Roll)