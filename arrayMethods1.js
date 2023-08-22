//Array methods

//fill function
//example.......

const arr=[1,2,3,4,5,6];
arr.fill(2);
console.log(arr);

function fillInNumbers(n){
    return Array(n)
    .fill(0)
    .map((_,idx)=> idx+1);
}

console.log(fillInNumbers(10));


//filer 

const num= [1,2,3,4,5,6,7,8];

const even= num.filter(isEven)

function isEven(value){
    return value % 2 === 0;
}

console.log(even);

//find

const array1 = [5, 12, 8, 56 , 75];

const found = array1.find((element) => element > 40);

console.log(found);

//find Index

const array2=[5,12,8,130,44];
const isLargeNumber=(element)=> element>14;

console.log(array2.findIndex(isLargeNumber));


//foreach

const array3 = ['a', 'b', 'c',1,2,3];

array3.forEach((element) => console.log(element));

//include

const array4 = [1, 2, 3, 4, 6, 8];

console.log(array4.includes(2));
console.log(array4.includes(10));

//indexof

const beasts = ['ant', 'bison', 'camel', 'duck', 'bison'];

console.log(beasts.indexOf('bison'));

//map

const array5 = [1, 4, 9, 16, 32];

const map1 = array5.map((x) => x + 2);

console.log(map1);


//pop

const plants = ['broccoli', 'cauliflower', 'cabbage', 'kale', 'tomato'];

console.log(plants.pop());

console.log(plants);

//push

const animals = ['pigs', 'goats', 'sheep'];

const count = animals.push('cows');
console.log(count);
console.log(animals);

//reduce
const array6= [1, 2, 3, 6];

// 1 + 1 + 2 + 3 + 6
const initialValue = 1;
const sumWithInitial = array6.reduce((accumulator, currentValue) => accumulator * currentValue, initialValue);

console.log(sumWithInitial);


//Reverse 
const array7 = ['one', 'two', 'three'];
console.log('array7:', array7);

const reversed = array7.reverse();
console.log('reversed:', reversed);


//Slice
const animals1 = ['ant', 'bison', 'camel', 'duck', 'elephant'];

console.log(animals1.slice(2));
// Expected output: Array ["camel", "duck", "elephant"]

console.log(animals1.slice(2, 4));
// Expected output: Array ["camel", "duck"]

console.log(animals1.slice(1, 5));
// Expected output: Array ["bison", "camel", "duck", "elephant"]

console.log(animals1.slice(-2));
// Expected output: Array ["duck", "elephant"]

console.log(animals1.slice(2, -1));
// Expected output: Array ["camel", "duck"]


//Splice
const months = ['Jan', 'March', 'April', 'June'];
months.splice(1, 0, 'Feb');
// Inserts at index 1
console.log(months);
// Expected output: Array ["Jan", "Feb", "March", "April", "June"]

months.splice(4, 1, 'May');
// Replaces 1 element at index 4
console.log(months);
// Expected output: Array ["Jan", "Feb", "March", "April", "May"]


