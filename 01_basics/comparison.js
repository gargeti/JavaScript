
// console.log(2>1);
// console.log(2<1);
// console.log(2>=1);
// console.log(2<=1);
// console.log(2==1);
// console.log(2!=1);
// while comparing thd numbers must be remember that the type of the numbers are same.
//typescript restrict  you to compare the different data type.
// console.log(null==0);//false
// console.log(null>=0);//true
// console.log(null<=0);//true
// console.log(null!=0);//true
// the reason is that an equalitycheck ==and comparisons><>=<=work differently .
// comparisons convert null to a number,treated it as 0.
// that's why null>=0 is true and null>0 is false.
// comparisons of null and the undefined are struck us in a dilema to answer the given compare answer so we just take care while doing this type of conversion .
// we will avoid this and make sure that we written a clean code in the programing.

console.log(undefined==0);//false
console.log(undefined>=0);//false
console.log(undefined<=0);//false
console.log(undefined!=0);//true
// strict check for checking the strictly variables along with their data type as well with ===(triple equals)

// strict check for checking the strictly variables along with their data type as well with ===(triple eqalals to)
console.log("");