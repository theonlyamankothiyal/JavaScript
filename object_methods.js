//object.___
console.log("------------ entries -------------")
const obj = { foo: "bar",
              baz: 42 };
console.log(Object.entries(obj));

console.log("------------ hasown -------------")        //true(if present) or false(if not present or inherited)
const object1 = {
    prop: 'exists',
  };
  
  console.log(Object.hasOwn(object1, 'prop'));
  console.log(Object.hasOwn(object1, 'toString'));

  console.log("------------ keys -------------")
  const ob = { 0: "a", 1: "b", 2: "c" };
  console.log(Object.keys(ob));

  const arr = ["a", "b", "c"];
  console.log(Object.keys(arr));

  console.log("------------ values -------------")
  const arr1 = ["a", "b", "c"];
  console.log(Object.values(arr1));
  console.log(Object.values(ob));
