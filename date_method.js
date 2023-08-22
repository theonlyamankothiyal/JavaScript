console.log("    getDate    ")  //returns day of month => 4
const birthday = new Date('August 19, 1975 23:15:30');
const date1 = birthday.getDate();
console.log(date1);

console.log("   getDay   ")
const birthday1 = new Date('August 19, 1975 23:15:30');
const day1 = birthday1.getDay();        // Sunday - Saturday : 0 - 6

console.log(day1);

console.log("   getfulyear   ")
const moonLanding = new Date('July 20, 69 00:20:18');

console.log(moonLanding.getFullYear());  // 1969

console.log("    getHours    ")
const birthday2 = new Date('March 13, 08 04:20');
console.log(birthday2.getHours());

console.log("     getMiliseconds    ")
moonLanding.setMilliseconds(123);           //moonlanding from above
console.log(moonLanding.getMilliseconds());

console.log("     getMinutes      ")
const birthday3 = new Date('March 13, 08 04:20');
console.log(birthday3.getMinutes());

console.log("      getMonth         ")
console.log(moonLanding.getMonth()); // (January gives 0)

console.log("       getSeconds      ")
console.log(moonLanding.getSeconds());

console.log("       getTime         ")
console.log(moonLanding.getTime());  // Milliseconds since Jan 1, 1970, 00:00:00.000 GMT

console.log("         now          ")
const start = Date.now();
for(i=0;i<10;i++)
{
    console.log(i);
}
console.log(`Time elapsed: ${Date.now() - start} ms`);

console.log("          parse         ");     //parse timestring into timestamp
console.log(Date.parse("2019-01-01"));
console.log(Date.parse("2019-01-01T00:00:00.000Z"));

console.log("         setdate         ")
const event1 = new Date('August 19, 1975 23:15:30');
event1.setDate(24);
console.log(event1.getDate());

console.log("           setfullYear             ")
event1.setFullYear(1969);

console.log(event1.getFullYear());

console.log("           sethours            ")       //incmplete
const event2 = new Date('August 19, 1975 23:15:30');
event2.setHours(10);
console.log(event2);

console.log("           setmiliseconds           ")
event2.setMilliseconds(576);
console.log(event2.getMilliseconds());

console.log("            setMinutes              ")        
event2.setMinutes(45);
console.log(event2.getMinutes());
console.log(event2);

console.log("             setMonth             ")
event2.setMonth(3);
console.log(event2.getMonth());

console.log("              setseconds          ")
event2.setSeconds(42);
console.log(event2.getSeconds());
console.log(event2);

console.log("                 setTime             ")
const launchDate = new Date('July 1, 1999, 12:00:00');
const futureDate = new Date();
futureDate.setTime(launchDate.getTime());

console.log(futureDate)