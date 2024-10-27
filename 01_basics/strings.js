const name="eti garg and in the final year"
const projects="30"
// console.log(name+" has "+ projects +" in their repo");//this is the old method of using a string that we cant use for the optimal soltuitons.
//const string ="hello this is ${name} that work on more than ${projects} projects in their repo"


console.log(`Hello, this is ${name.toUpperCase().charCodeAt(2)} that work on more than ${projects} projects in their repo.`); //modern way to write a string that is called string interpolation.

const gameName=new String("etigarg ji")
console.log(gameName[0]);//e
console.log(gameName.__proto__);//{} an object
console.log(gameName.length);//10
console.log(gameName.toUpperCase());//not change the original value but make the another stack for the changing new memory in it.
//link for stack and heap:-https://youtu.be/7gwc-1czolw?si=uzqmSYF4qd47xTLi

console.log(gameName.indexOf('g'));//3
const newString=gameName.substring(0,4)
console.log(newString);//etig (not include the 4 index only the 4 character of the string starting from index 0 )
const otherString=gameName.slice(-10,-7)
console.log(otherString);//eti (as it contain negative value too but while negative values ist start from end)

const newtrim="            eti garg        ."
console.log(newtrim);//            eti garg        . (bcoz it contain black spaces before the word of a sentenced be started)
console.log(newtrim.trim());//eti garg        .(trim the spce before the character.)


const url="https://www.linkedin.com/in/eti-garg-a3b18a249/"
console.log(url.replace('a3b18a249','profile'));//https://www.linkedin.com/in/eti-garg-profile/ (it replace the characters that firstly search and then replace toh some other string or characters.)
console.log(url.includes('a3b18a249'));//true (it check the character in the string that exists or not.)
console.log(name.split(' '));//['eti',  'garg', 'and',  'in', 'the',  'final','year']  (the characters be spilit into sub strings on the basis of separate and limits).



// ***********************************************************************************METHODS**************************************************************************************************************************************************************************************************************************
// THERE ARE VARIOUS TYPES OF METHOD IN JAVASCRIPT LANGUAGE.

// anchor:ƒ anchor()
// at:ƒ at()
// big:ƒ big()
// blink:ƒ blink()
// bold:ƒ bold()
// charAt:ƒ charAt()
// charCodeAt:ƒ charCodeAt()
// codePointAt:ƒ codePointAt()
// concat:ƒ concat()
// constructor:ƒ String()
// endsWith:ƒ endsWith()
// fixed:ƒ fixed()
// fontcolor:ƒ fontcolor()
// fontsize:ƒ fontsize()
// includes: ƒ includes()
// indexOf: ƒ indexOf()
// isWellFormed: ƒ isWellFormed()
// italics: ƒ italics()
// lastIndexOf: ƒ lastIndexOf()
// length: 0
// link: ƒ link()
// localeCompare: ƒ localeCompare()
// match: ƒ match()
// matchAll: ƒ matchAll()
// normalize: ƒ normalize()
// padEnd: ƒ padEnd()
// padStart: ƒ padStart()
// repeat: ƒ repeat()
// replace: ƒ replace()
// replaceAll: ƒ replaceAll()
// search: ƒ search()
// slice: ƒ slice()
// small: ƒ small()
// split: ƒ split()
// startsWith: ƒ startsWith()
// strike: ƒ strike()
// sub: ƒ sub()
// substr: ƒ substr()
// substring: ƒ substring()
// sup: ƒ sup()
// toLocaleLowerCase:ƒ toLocaleLowerCase()
// toLocaleUpperCase:ƒ toLocaleUpperCase()
// toLowerCase: ƒ toLowerCase()
// toString: ƒ toString()
// toUpperCase: ƒ toUpperCase()
// toWellFormed: ƒ toWellFormed()
// trim: ƒ trim()
// trimEnd: ƒ trimEnd()
// trimLeft: ƒ trimStart()
// trimRight: ƒ trimEnd()
// trimStart: ƒ trimStart()
// valueOf: ƒ valueOf()
// Symbol(Symbol.iterator):ƒ [Symbol.iterator]()
