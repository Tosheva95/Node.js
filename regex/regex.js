//1. \w{5} matches only words with 5 characters
//2. \w+ matches one or more word characters 
let string = 'Regex is the best'
let reg = /\w{5}/g
let reg2 = /\w+/g
const myArray = string.match(reg)
console.log(myArray);
console.log(string.match(reg2));

//3. [a-z] will match ASCII characters in the range from a to z
let str = "i97va11599na112116"
let char = /[a-z]/g
console.log(str.match(char));


//4. \d$ will match the last one digit
let number = '1,234567.89'
let int = /\d$/g
console.log(number.match(int));

//5. [^a-zA-Z] a string that has not a letter from a to z or from A to Z. 
//In this case ^ is used as negation of the expression.
let quote = "There's no sleep in Node.js v15.10.0"
let regex = /[^a-zA-Z]\d+/g
console.log(quote.match(regex)); 