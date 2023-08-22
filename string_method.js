console.log("------------ charAt -------------")
const sentence = 'The quick brown fox jumps over the lazy dog.';
const index = 8;
console.log(sentence.charAt(6));
console.log(`The character at index ${index} is ${sentence.charAt(index)}`);

console.log("------------ concate -------------")
const str1 = 'Hello';
const str2 = 'Pratik';
console.log(str1.concat(' ', str2));

console.log("------------ includes -------------")
const str = "To be, or not to be, that is the question.";
console.log(str.includes("TO BE"));

console.log("------------ indexof -------------")
const paragraph = 'The quick brown fox jumps over the lazy dog. If the dog barked, was it really lazy?';
const searchTerm = 'dog';
const indexOfFirst = paragraph.indexOf(searchTerm);
console.log(`The index of the first "${searchTerm}" from the beginning is ${indexOfFirst}`);

console.log("------------ normalize -------------")     //returns the normalize form of unicode
const name1 = '\u0041\u0065\u00e9\u006c\u0069\u0065';
console.log(name1.normalize('NFD'));

console.log("------------ replace -------------");
const p = 'If the dog reacted, was it really lazy?';
console.log(p.replace('dog', 'donkey'));

console.log("------------ replaceall -------------");
const p1 = 'The quick brown fox jumps over the lazy dog. If the dog reacted, was it really lazy?';
console.log(p1.replaceAll('dog', 'donkey'));

console.log("-------------- slice -------------");
const astr1 = "The morning is upon us."; 
const astr2 = astr1.slice(1, 8);
const str3 = astr1.slice(4, -2);
const str4 = astr1.slice(12);
const str5 = astr1.slice(30);
console.log(astr2); 
console.log(str3); 
console.log(str4); 
console.log(str5); 

console.log("-------------- split -------------");
const st = 'The quick brown fox jumps over the lazy dog.';      //convert into array

const words = st.split(' ');
console.log(words[3]);
const strCopy = st.split();
console.log(strCopy);

console.log("-------------- substring -------------");
const str6 = 'Mozilla';

console.log(str6.substring(1, 3));
console.log(str6.substring(2));

console.log("-------------- tolowercase -------------");
const sent = 'The quick brown fox jumps over the lazy dog.';

console.log(sent.toLowerCase());

console.log("-------------- tostring -------------");
const x = new String("Hello world");
console.log(x.toString()); 

console.log("-------------- touppercase -------------");
const sentence1 = 'The quick brown fox jumps over the lazy dog.';
console.log(sentence1.toUpperCase());

console.log("-------------- trim -------------");       //removes whitespaces from both sides of string
const greeting = '   Hello world!   ';
console.log(greeting);
console.log(greeting.trim());

console.log("-------------- valueof -------------");
const x1 = new String("Hello world");
console.log(x1);
console.log(x1.valueOf());