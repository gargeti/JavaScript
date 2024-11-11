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
console.log("A ",myArr);//A [1,2,3,3,4,5,6] 

const myn1=myArr.slice(1,5) //5th index not included
console.log(myn1);//[ 2, 3, 3, 4 ]
console.log("B ",myArr);//B  [1, 2, 3, 3, 4, 5, 6 ]

const myn2=myArr.splice(1,5)//5th index included and the original array be manipulates and slice portion be extracted from it now the new array.
console.log(myn2);//[ 2, 3, 3, 4, 5 ]
console.log("C ",myArr);//C [1,6]





