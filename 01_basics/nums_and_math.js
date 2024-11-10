const score =400000
console.log(score);//400000
console.log(score.toLocaleString())//400,000


const balance=new Number(399.684684)
console.log(balance);//[Number: 399]
console.log(balance.toString());//[Number: 399]
console.log(typeof(balance));//object
console.log(balance.toFixed(2));//399.68


const value=123.4787383
console.log(value.toPrecision());//123.4787383
const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN'));//10,00,000



// *****************************************************METHODS OF NUMBER*************************************************************
// constructor: ƒ Number()
// toExponential: ƒ toExponential()
// toFixed:ƒ toFixed()
// toLocaleString: ƒ toLocaleString()
// toPrecision: ƒ toPrecision()
// toString: ƒ toString()
// valueOf: ƒ valueOf()
// [[Prototype]]: Object
// [[PrimitiveValue]]: 0
// [[PrimitiveValue]]: 399



// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++ MATHS  +++++++++++++++++++++++++++++++++++++++++++++++{}
console.log(Math);//Object [Math]{}
console.log(Math.abs(-40));//40
console.log(Math.round(56.54));//57
console.log(Math.floor(56.54));//56
console.log(Math.ceil(56.02));//57
console.log(Math.min(0,-7,-5,5,8,1));//-7
console.log(Math.max(0,-7,-5,5,8,1));//8


console.log(Math.random());
console.log(Math.random()*10);
console.log(Math.random()*10+1);
console.log((Math.random()*10)+1);
// the value of random must be between 0 and 1 by for any kind of operation.

const min=10
const max=20
console.log(Math.floor(Math.random()*(max-min))+min);
