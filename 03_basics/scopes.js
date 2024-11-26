// let a=20
// const b=40
// var c=60

// {}=>scope , if it is comes with object declaration (variables) then it is the object and with function ot statement its called scope.

// console.log(a);//20
// console.log(b);//40
// console.log(c);//60





if(true){
    let a=20
    const b=40
    var c=60
}//scope be inside the {}


// console.log(a);//a is not defined (scope inside it)
// console.log(b);// b is not defined(socpe inside it)
// console.log(c);//60 scope outside the {} hence it create problems of global and block scope.



// ********************Clarification ****************************if(true){
   
var c= 300//global scope ,the global values available inside the block to access .

if(true){ 
    let a=20
    const b=40
    var c=60
}//block scope,the value of block scope only put inside the block not anywhere outside present.

console.log(c);//60


let a=30
if(true){ 
    let a=20
    const b=40
    var c=60
}
console.log(a);//30


// var create problms in scope so we avoid to use them. 
// scope are different for the windows(via inspect) and node