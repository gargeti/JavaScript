//Immediately Invoked Function Expression 

// function chai(){
//     console.log(`db connected`);//db connected
// }
// chai()

(function chai(){
    //named iffe
    console.log(`db connected`);//db connected
})();
// use (;)for end the iffe function and starts a new.

(  ()=> {
    //unamed iffe
    console.log(`db connected again`);//db connected again
})();

(  (name)=> {
    //argumented iffe
    console.log(`db connected ${name}`);//db connected again
})("eti garg");



// ()()
//first bracket =>defination of function and second bracket => execution call of function.


// iife functions are those which execute immediately 
// sometimes global scope pollution occur so to reduce the global variables or functions polltuion we use the iife function.