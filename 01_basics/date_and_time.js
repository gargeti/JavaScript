// let myDate=new Date()
// console.log(myDate);//2024-11-10T05:28:21.016Z
// console.log(myDate.toString());//Sun Nov 10 2024 05:29:22 GMT+0000 (Coordinated Universal Time)
// console.log(myDate.toDateString());//Sun Nov 10 2024
// console.log(myDate.toISOString());//2024-11-10T05:31:38.400Z
// console.log(myDate.toLocaleString());//11/10/2024, 5:31:38 AM
// console.log(myDate.toLocaleDateString());//11/10/2024
// console.log(typeof myDate);//object

// let myCreatedDate = new Date(2024,0,23)
// console.log(myCreatedDate.toDateString());//Tue Jan 23 2024

// let myCreatedDate = new Date(2024,0,23,4,50)
// console.log(myCreatedDate.toLocaleString());//1/23/2024, 4:50:00 AM


// let myCreatedDate = new Date("10-11-2024")
// console.log(myCreatedDate.toLocaleString());//10/11/2024, 12:00:00 AM

// ******************************Timestamp*************************************************
// let myCalendarDate=new Date("10-11-2024")
// let myTimeStamp=Date.now()
// console.log(myTimeStamp);//1731237557980 miliseconds from starting date and till now
// console.log(myCalendarDate.getTime());//1728604800000 miliseconds from starting and till 10-11-2024.
// console.log(Math.floor(Date.now()/1000));

// THE OUTPUT CALCULATE THE TIME FROM 1 JAN 1970 IN MILISECONDS AND THEN GIVE THEM HERE.
// *the months in javascript start from numbering 0 but when the format is dd/mm/yyyy then the month start from 1 to 12 as specific.
// *0=jan
// *1=feb

let newDate=new Date()
console.log(newDate);
console.log(newDate.getMonth()+1);
console.log(newDate.getFullYear());
console.log(newDate.getDate());

newDate.toLocaleDateString('default',{
    weekday: "long",
    timeZoneName: "kolkata"
})

