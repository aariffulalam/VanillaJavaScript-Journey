console.log("Welcome to tutorial 24");


let d = new Date();
d = new Date(454);   //milliseconds
d = new Date('1/1/2112');
d = new Date(4223, 12, 21, 6, 21, 43, 321);    //year, month, day, hours, minutes, seconds, milliseconds
console.log(d);






let mydate = new Date();
mydate.setHours(0);
alert(mydate);
mydate.setHours(0, 0, 0, 0);
alert(mydate);





let today = new Date();
console.log(typeof today);
let otherDate = new Date('8-4-2003 04:54:08');
otherDate = new Date('June 13 1976');
otherDate = new Date('09/16/1976');
console.log(otherDate);
let a;
a = otherDate.getDay();
a = otherDate.getDate();
a = otherDate.getMinutes();
a = otherDate.getSeconds();
a = otherDate.getHours();
a = otherDate.getTime();
a = otherDate.getMilliseconds();
a = otherDate.getMonth();
console.log(a);
otherDate.setDate(23);
otherDate.setMonth(0);
otherDate.setFullYear(1900);
otherDate.setMinutes(2);
otherDate.setHours(1);
otherDate.setSeconds(3);
console.log(otherDate);









/*
Date Object Methods


Method      ->      Description

getDate()    ->   It will return the day of the month (from 1-31)

getDay()    ->   It will return the day of the week (from 0-6)

getFullYear()    ->   It will return the year

getHours()    ->   It will return the hour (from 0-23)

getMilliseconds()    ->   It will return the milliseconds (from 0-999)

getMinutes()    ->   It will return the minutes (from 0-59)

getMonth()    ->   It will return the month (from 0-11)

getSeconds()    ->   It will return the seconds (from 0-59)

getTime()    ->   It will return the number of milliseconds since midnight Jan 1 1970, and a specified date

getTimezoneOffset()    ->   It will return the time difference between UTC time and local time, in minutes

getUTCDate()    ->   It will return the day of the month, according to universal time (from 1-31)

getUTCHours()    ->   It will return the hour, according to universal time (from 0-23)

getUTCMilliseconds()    ->   It will return the milliseconds, according to universal time (from 0-999)

getUTCMinutes()    ->   It will return the minutes, according to universal time (from 0-59)

getUTCMonth()    ->   It will return the month, according to universal time (from 0-11)

getUTCSeconds()    ->   It will return the seconds, according to universal time (from 0-59)

setDate()    ->   It will set the day of the month of a date object

setFullYear()    ->   It will set the year of a date object

setHours()    ->   It will set the hour of a date object

setMilliseconds()    ->   It will set the milliseconds of a date object

setMinutes()    ->   It will set the minutes of a date object

setMonth()    ->   It will set the month of a date object

setUTCHours()    ->   It will set the hour of a date object, according to universal time

toDateString()    ->   It will convert the date portion of a Date object into a readable string

toLocaleString()    ->   It will convert a Date object to a string, using locale conventions

toString()    ->   It will convert a Date object to a string

toTimeString()    ->   It will convert the time portion of a Date object to a string

toUTCString()    ->   It will convert a Date object to a string, according to universal time

UTC()    ->   It will return the number of milliseconds in a date since midnight of January 1, 1970, according to UTC time

valueOf()    ->   It will return the primitive value of a Date object

*/