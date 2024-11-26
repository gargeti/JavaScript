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

// console.log(c);//60


let a=30
if(true){ 
    let a=20
    const b=40
    var c=60
}
// console.log(a);//30


// var create problms in scope so we avoid to use them. 
// scope are different for the windows(via inspect) and node



function one(){
    const username="eti garg"
    function two(){
        const website="youtube"
        console.log(username);

    }
    // console.log(website);
    two()
}
one()
//website is not defined it show error that the scope of website not defined outside the function two let check it aftercommenting the line .




// function one(){
//     const username="eti garg"
//     function two(){
//         const website="youtube"
//         console.log(username);//eti garg

//     }
//     // console.log(website);
//     // two()
// }
// one()



if(true){
    const username="eti garg"
    if(username=="eti garg"){
        const website=" youtube"
        // console.log(username + website);//eti garg youtube

    }
    // console.log(website);
}
// console.log(usename);



// *********************************INTERESTING************************************

// only function
// function addone(num){
//     return num +1
// }
// console.log(addone(5));//6



// expressions just as variable(variables are very powerful that hold any kind of values in js like json values,functions etc)
// const addtwo=function(num){
//     return num+2
// }
// console.log(addtwo(5));//7





// ********TRICK TYPE 2**************

// console.log(addone(5));//6
function addone(num){
    return num +1
}//only declare the function 


console.log(addtwo(5));//Cannot access 'addtwo' before initialization
const addtwo=function(num){
    return num+2
}//declare the function with wrapped it in a variable.
// this concept is called hosting in the javascript.