/* 3.- If a is greater than b return 'a is greater than b' else 'a is less than b'.
 Try to implement it in to ways
- using if else
- ternary operator. */
let a = 5
let b = 8;
a > b 
? console.log(`${a} is greater than ${b}`)
: console.log(`${b} is greater than ${a}`)

/* 4.-Even numbers are divisible by 2 and the remainder is zero. How do you check,
 if a number is even or not using JavaScript? */
let  number = prompt('Enter a number: ');
number % 2 === 0
? alert(`${number} is an even number`)
: alert(`${number} is an odd number`)
