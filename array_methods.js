console.log("----------- Fill -------------")
const array = [11, 12, 13, 14];
console.log(array.fill(0, 2, 4));

console.log("----------- Filter -------------")
const words = ['asd', 'qwertt', 'duhvfvn', 'evfkfiovj', 'destdfvdfv', 'presvaent'];
const result = words.filter((val) => val.length > 6);
console.log(result);

console.log("----------- Find -------------")
const array1 = [1, 8, 13, 44];
const found = array1.find((element) => element > 10);
console.log(found);

console.log("----------- FindIndex -------------")
const array2 = [5, 12, 8, 130, 44];
const isLargeNumber = (element) => element > 13;
console.log(array2.findIndex(isLargeNumber));

console.log("----------- ForEach -------------")
const array3 = [10,22,334,,445];
array3.forEach((element) => console.log(element));

console.log("----------- Includes -------------")//true,false
const pets = ['cat', 'dog', 'bat'];
console.log(pets.includes('cat'));
console.log(pets.includes('at'));

console.log("----------- indexof -------------")//returns index, if not present then -1
const beasts = ['ant', 'bison', 'camel', 'duck', 'bison'];
console.log(beasts.indexOf('bison'));
console.log(beasts.indexOf('giraffe'));

console.log("----------- map -------------")
const array4 = [1, 4, 9, 16];
const map1 = array4.map((x) => x * 2);
console.log(map1);

console.log("----------- pop -------------")
const a =array4.pop();
console.log(array4);

console.log("----------- push -------------")
const as =array4.push('asd');
console.log(array4);

console.log("----------- reduce -------------")
console.log(array3.reduce((x,y)=>x+y));

console.log("----------- resarve -------------")
console.log(array4.reverse());

console.log("----------- slice -------------")
console.log(array4.slice(2,5));    //(start,end index)

console.log("----------- sort -------------")
console.log(array4.sort());
console.log(array3.sort());

console.log("----------- splice -------------")
const sp=(array4.splice(1,0,122));      //(index,deletecount,items)
console.log(array4);

console.log("----------- splice -------------")
