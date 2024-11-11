//  ARRAYS
 
 
 const myArr=[1,2,3,3,4,5,6]
 const myHeros=["marvel","superman"]
 const myArr2=new Array(1,2,3,4)
//  console.log(myArr[4]);


//  METHODS OF ARRAY
// myArr.push(8)
// myArr.push(7)
// myArr.pop()
// console.log(myArr);


// myArr.unshift(0)
// myArr.shift()



// console.log(myArr.includes(3));
// console.log(myArr.indexOf(6));


// const newArr=myArr.join()
// console.log(myArr);
// console.log(newArr);


// slice,splice
// console.log("A ",myArr);//A [1, 2, 3, 3, 4, 5, 6 ] 

const myn1=myArr.slice(1,5) //5th index not included
// console.log(myn1);//[ 2, 3, 3, 4 ]
// console.log("B ",myArr);//B  [1, 2, 3, 3, 4, 5, 6 ]

const myn2=myArr.splice(1,5)//5th index included and the original array be manipulates and slice portion be extracted from it now the new array.
// console.log(myn2);//[ 2, 3, 3, 4, 5 ]
// console.log("C ",myArr);//C [1,6]




const marvel_heros =["thor","ironman","spiderman"]
const dc_heros =["superman","flash","batman"]
// marvel_heros.push(dc_heros)
// console.log(marvel_heros);//[ 'thor', 'ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]
// console.log(marvel_heros[3][2]);//[ 'thor', 'ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]

const allHeros=marvel_heros.concat(dc_heros)
// console.log(allHeros);//[ 'thor', 'ironman', 'spiderman', 'superman', 'flash', 'batman']


const all_new_heros=[...marvel_heros,...dc_heros]//spreading the array 
// console.log(all_new_heros);


const otherArr=[1,2,[4,5,6],7,[6,7,[4,5]]]
const flatArr=otherArr.flat(Infinity)
// console.log(flatArr);
// the function flat used for concatenate the all array into a single one and take alll the inputs at once.


// console.log(Array.from("Eti Garg"));
// console.log(Array.isArray("Eti Garg"));
// console.log(Array.from({name:"Eti Garg"}));//[] interesting bcoz it is not converted from the normal value.


let score1=100
let score2=200
let score3=300

console.log(Array.of(score1,score2,score3));

