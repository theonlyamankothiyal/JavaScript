console.log("----------- abs -------------")

function difference(a, b) {
    return Math.abs(a / b);
  }
  console.log(difference(4,-8));        //absolute value (or returns positive value)

  console.log("----------- ceil -------------")
  console.log(Math.ceil(7.004));        //returns whole numbers

  console.log("----------- floor -------------")
  console.log(Math.floor(5.95));        //previous value (or round up)
  console.log(Math.floor(-5.95));

  console.log("----------- max -------------")
  console.log(Math.max(1,2,6));
  const array1 = [-1,-5,0];
  console.log(Math.max(...array1));     //spread 

  console.log("----------- min -------------")
  console.log(Math.min(1,2,6));
  console.log(Math.min(...array1));  

  console.log("------------ random -------------")
  function getRandomInt(max) {
    return Math.random() * max;
  }
  //function getRandomInt(max) {
  //  return Math.floor(Math.random() * max);
  //}
  console.log(getRandomInt(6));

  console.log("------------ round -------------")
  console.log(Math.round(0.9), Math.round(-5.98));

