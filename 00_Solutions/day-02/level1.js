let challenge = '30 Days Of JavaScript';
console.log(challenge);

//Print the length of the string
console.log(challenge.length);

//Change the string characters to capital letters
console.log(challenge.toUpperCase());

// Change the string character to lower case letters
console.log(challenge.toLowerCase());

// Cut out the first word of the string
console.log(challenge.substr(0,2));
console.log(challenge.substring(0,2));

//Slice out the phrase 'Days Of JavaScript' from '30 Days Of JavaScript'
console.log(challenge.substr(2));

// Check if the string contains a word 'Script'
console.log(challenge.includes('Script'));

// Split the string into an array
console.log(challenge.split());

// Split the string '30 Days Of JavaScript' at the space
console.log(challenge.split(' '));

// 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' split the string
// at the comma and change it to an array.
let company = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon';
console.log(company.split(','));

//Change '30 Days Of JavaScript' to '30 Days of Python'
console.log(challenge.replace('JavaScript', 'Python'));

// What is character at index 15 in '30 Days Of JavaScript'
console.log(challenge.charAt(15));

//What is the character code of J in '30 Days Of JavaScript'
console.log(challenge.charCodeAt(11));

// First occurence of a
console.log(challenge.indexOf('a'));

// Last occurence of a
console.log(challenge.lastIndexOf('a'));

// First occurence and last occurence of 'because'
let string = 'You cannot end a sentence with because because because is a conjunction'
console.log(string.indexOf('because'));
console.log(string.search('because'));
console.log(string.lastIndexOf('because'));

