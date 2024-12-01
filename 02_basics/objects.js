// object can be declared in two ways (1)literals (2)constructors
//singleton = when a object is created by the constructor then the object is singleton otherwise having multiple instances.
// when the object is declared as the literals so the object is not singleton.
    //all th object elements are accessed by dot(.) operator rarely squarebraces([])
    // the symbols syntax are defined in square brackets and also accessed from it too. 


// ************OBJECT LITERALS******************

const course=Symbol("ds")


const JsUser={
    name:"Eti Garg",
    age:18,
    [course]:"ds",
    isLoggedIn:false,
    lastLoginDays:["monday","tuesday"]
}
// console.log(JsUser.age);
// console.log(JsUser["age"]);
// console.log(JsUser["age"]);
// console.log(JsUser[course]);
// console.log(typeof JsUser[course]);

// Object.freeze(JsUser);
JsUser.lastLoginDays="thrusday"
// console.log(JsUser.lastLoginDays);
// console.log(JsUser.lastLoginDays);//thrusday
// console.log(JsUser);


// ******FUNCTIONS************
JsUser.greetings=function(){
        console.log("hello users of js");
        
}
JsUser.greetings2=function(){
        
        console.log(`hello users of js, ${this.name}`);
}
// console.log(JsUser.greetings);//[Function (anonymous)]
console.log(JsUser.greetings());
console.log(JsUser.greetings2());





// FZDFXGFXFXGTD