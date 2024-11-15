// const tinderUser=new Object()//singleton object .
const tinderUser={}//non-singleton object.
 tinderUser.id="Garg18"
 tinderUser.name="Eti Garg"
 tinderUser.isLoggedIn = false
// console.log(tinderUser);//{}


const regularUser={
    email: "gargeti18@gmail.com",
    fullname:{
        userfullname:{
            firstname:"eti",
            lastname:"garg"
        }
    }
}

// console.log(regularUser.fullname);//{ userfullname: { firstname: 'eti', lastname: 'garg' } }
// console.log(regularUser.fullname.userfullname.firstname);//eti


const obj1={1:"a",2:"b"}
const obj2={3:"a",4:"b"}
// const obj3={obj1,obj2}
// console.log(obj3);//{ obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }

// const obj3=Object.assign({},obj1,obj2)
// console.log(obj3);//{ '1': 'a', '2': 'b', '3': 'a', '4': 'b' }
// as the assign operator is doing that the object be merge with the target and the source and it will take a target and others are the data that has been transfer to it then it will take a empty target that the whole objects copied in it.


const obj3={...obj1,...obj2}
// console.log(obj3);//{ '1': 'a', '2': 'b', '3': 'a', '4': 'b' }


// console.log(tinderUser);
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

const course={
    coursename:"js in hindi",
    price:"999",
    conurseInstructor:"etigarg"}

    const{conurseInstructor}=course
    console.log(conurseInstructor);
    const navbar=(pros)

