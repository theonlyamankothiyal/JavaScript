//entries

const person = {
    name: 'Aman',
    age: 25,
  };
  
  for (const [key, value] of Object.entries(person)) {
    console.log(`${key}: ${value}`);
  }


   //hasown

   const objName={
    name: 'Aman',
    age:25,
    c:'pune',
   };

   console.log(Object.hasOwn(objName,'id'));


   //key

   const object1 = {
    a: 'somestring',
    b: 42,
    c: false,
  };
  
  console.log(Object.values(object1)); 
  console.log(Object.keys(object1)); 

  

   