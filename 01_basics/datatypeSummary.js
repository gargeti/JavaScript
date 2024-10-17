// datatypes are divided in 2 categories:
// PRIMITIVE DATATYPE 
      // 7 TYPES:- string, number, boolean, null, undefined, symbol, BigInt.


const score=100 //number
const scorevalue=100.3//number either in decimal or without both are count in number category.
const isLoggedin=false// boolean
const outsideTemp=null // empty 
let userEmail; //undefined value
const id=Symbol('123')//symbol use for unique and the return type also a diiferent datatype clld symbol. 
const anotherId=Symbol('123') //symbol has the work that if you passedsame value(string or number anytype)but the values of id and anotherid is not the same.


console.log(id==anotherId);//false

const bigNumber=1234567n //defined as ending by n of a number as a bigint





// ****************************************************Non-Primitive*******************************************************************************************************
// NON-PRIMITIVE DATATYPE(REFERNCE)
      // 3 TYPES:- array, object, functions
// js is a dynamic type language
// return type of all nonprimitive dt are object.

const heros=["shaktiman","naagraj","doga"]
let myObj={
      name:"eti garg",
      age:22,
}


const myFunction=function(){
console.log("hello world");
}
console.log(typeof outsideTemp);//object
console.log(typeof myFunction);//function but is spoken as object function.
console.log(typeof heros);//object
console.log(typeof id);//symbol

//link:- https://262.ecma-international.org/5.1/#SEC-11.4.3