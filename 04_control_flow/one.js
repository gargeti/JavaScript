//IF STATEMENT
// if(condition=>true){
// statements of execution
// }


// const temp = 50
// if(temp>=50){
//     console.log("greater than and equals to 50");
// }
// else{
//     console.log("less than 50");
// }
// console.log("successful execution of code");
//greater than and equals to 50
// successful execution of code


// const score=200
// if(score>100){
//     const power="fly"
//     console.log(`user power: ${power}`);
// }
// console.log(`user power: ${power}`);
// //power is not defined



// const score=200
// if(score>100){
//     var power="fly"
//     console.log(`user power: ${power}`);
// }
// console.log(`user power: ${power}`);
// user power: fly
// user power: fly(scope of var is completely global that can acccessed globally in the whole program so the execution of power be done outside the control statement.)




// const score=200
// if(score>100){
//     let power="fly"
//     console.log(`user power: ${power}`);
// }
// console.log(`user power: ${power}`);
// // power is not defined


// *******Implicit scope or short hand notation******** 

// const balance=1000
//  if(balance > 500) console.log("purchase");


// if(balance > 500) console.log("purchase"),console.log("item");//not a good practice of the code so avoid this type of programs of commas.




// ***********************IF ELSEIF************************************************

const amt=500
if(amt<400){
    console.log("cant purchase");
}else if(amt<750){
    console.log("may purchase");
}else if(amt<1000){
        console.log("immediately purchase");
}
console.log(`sold out at ${amt}` );



// *******************operators*************
// <lessthan
// >greaterthan
// >=greaterthanequalsto
// <=lessthanequalsto
// ==equals to
// !=notequalto
// ===strictequalto with data type too