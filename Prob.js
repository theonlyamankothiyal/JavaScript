/* // Array concat
  
/* const arr=[1,2,3,[4,5,[6],7],"hello","world"];
 const newarr=arr.flat(1);
 const newarr1= newarr.flat(1);

 console.log(newarr1);
 */

 //object True/false:-

 /* const obj1={
    id:147,
    age:25,
 }
 const obj2={
    id:147,
    age:25,
 }

 const {id,age}=obj1
 const {id:eid,age:eage}=obj2;

 if(id===eid && age===eage){
    console.log("True");
 }
 else{
    console.log("false");
 } */


 // Array concat

/*  
 flat(arr);
 console.log(arr1)
 const arr=[1,2,3,[4,5,[6],7],"hello","world"];

 let arr1=[]; 
 function flat(arr) {
    arr.forEach(element => {
        if(typeof (element)==='object'){
            flat(element);
        }
        else{
            arr1.push(element);
        }
        
    });
 } */

