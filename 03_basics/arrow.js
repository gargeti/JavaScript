const user={
    username: "eti garg",
    price:999,

    welcomeMessage:function(){
        console.log(`${this.username} , welcome to site`);//this=> userd for current context.
        // console.log(this);


// *******one*******
// eti garg , welcome to site
// {
//   username: 'eti garg',
//   price: 999,
//   welcomeMessage: [Function: welcomeMessage]
// }


// *******************two***************
// sam , welcome to site
// {
//   username: 'sam',
//   price: 999,
//   welcomeMessage: [Function: welcomeMessage]
// }

    }
}
// user.welcomeMessage()//eti garg , welcome to site
// user.username="sam"
// user.welcomeMessage()//sam , welcome to site
//  console.log(this);//{}


//  function chai(){
//     console.log(this);
//  }
//  chai()//functions properties.
 


//  function chai(){
//      let username="eti garg"
//     console.log(this.username);//undefined
//  }
//  chai()
 //current context used only in the object not in function.



//  const chai=function(){
//     let username="eti garg"
//     console.log(this.username);//undefined
//  }
//  chai()
// *********************************Arrow Function*********************************************
// () => {}// arrow function

//  const chai=()=>{
//     let username="eti garg"
//     console.log(this);//{}
//     console.log(this.username);//undefined
//  }
//  chai()


// EXPLICIT RETURN FUNCTION
//  const addtwo=(num1,num2)=>{
//     return num1+num2
//  }
// console.log( addtwo(3,4));//7



// IMPLICIT RETURN FUNCTION (used in a same line and no used of return keyword) most udrd in react. 
//  const addtwo=(num1,num2) =>  (num1+num2)
// console.log( addtwo(3,4));//7



 const addtwo=(num1,num2) =>  ({username:"eti garg"})
console.log( addtwo(3,4));//{username:"eti garg"}