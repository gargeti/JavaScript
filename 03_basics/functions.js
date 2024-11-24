function sayMyName(){
console.log("E");
console.log("T");
console.log("I");
console.log("G");
console.log("A");
console.log("R");
console.log("G");    
}

// sayMyName//only refernce of the function
// sayMyName()// execution of the function 




// **********TYPE 1 ***************
// function addTwoNumbers(num1,num2){   //num1 and num2 are the parameters in the function
//     console.log(num1+num2);
// }

// addTwoNumbers(2,4)//6
// addTwoNumbers(2,"4")//24
// addTwoNumbers(2,null)//2
// addTwoNumbers(2,"a")//2a
// //num1 and num2 are the parameters in the function 
// and the 2 and 4 are the argument that passed in the funtion



// *****************TYPE 2 ************************

// function addTwoNumbers(num1,num2){   
//     let result =num1+num2
//     return result
//     // console.log("Result");//THIS CONSOLE IS NOT PRINT AS THE RULE OF FUNCTION THAT AFTER RETURN STATEMENT NO OTHER STATEMENT EXECUTE.
// }
// const result =addTwoNumbers(3,5)
// console.log("Result:",result);//Result: 8

// **********************type 3***********************


// function addTwoNumbers(num1,num2){   
//     return num1+num2
// }
// const result=addTwoNumbers(3.5,5.40)
// console.log("Result:", result);//Result: 8.9





function loggedinUserMessgae(username="SAM"){
    if(!username){//!=> convert true to false and vice versa.
        console.log("Please enter username");
        return
    }
return `${username} just logged in`
}
// console.log(loggedinUserMessgae("Eti garg"));//Eti garg just logged in
// console.log(loggedinUserMessgae());//undefined just logged in
// console.log(loggedinUserMessgae());//Please enter username   undefined


// ********after default value be sam************************************************

// console.log(loggedinUserMessgae());//SAM just logged in
// console.log(loggedinUserMessgae("Eti garg"));//Eti garg just logged in



// function calculatecartprice(val1,val2,...num1){//...argument (this i rest or spread operator only can be discriminate on their uses.)now its rest
//  return num1
// }
// console.log(calculatecartprice(200,300,240,450,210))// val1=>200,val2=>300 and all the other elements are stored in array => [ 240, 450, 210 ]



// function calculatecartprice(...num1){//...argument (this i rest or spread operator only can be discriminate on their uses.)now its rest
//  return num1
// }
// console.log(calculatecartprice(200,300,240,450,210))//[ 200, 300, 240, 450, 210 ]

// ******************object
// const user={
//     username: "Eti garg",
//     price: 199
// }




//*********************function
function handleobject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleobject(user)//username is Eti garg and price is 199


// ******************direct object *******************
handleobject({
    username:"sam",
    price: 99
})//username is sam and price is 99


// *********Array***************
const mynewArr=[200,600,300,500]

function returnSecondVal(getArray){
    return getArray[1]
}
console.log(returnSecondVal(mynewArr));
