/* 1.- Write a script that prompt the user to enter base and height of the triangle
 and calculate an area of a triangle (area = 0.5 x b x h). */
 let base = prompt('Enter base: ');
 let height = prompt('Enter height: ');
 alert(`The area of the triangle is ${base * height * 0.5}.`);

 /* 2.- Write a script that prompt the user to enter side a, side b, and side c of the triangle
  and and calculate the perimeter of triangle (perimeter = a + b + c) */
 let  a = prompt('Enter side a :');
  let  b = prompt('Enter side b :');
  let  c = prompt('Enter side c:');
  alert(`The perimeter of the triangle is ${parseInt(a) + parseInt(b) + parseInt(c)}.`);

/* 3.- Get length and width using prompt and calculate an area of rectangle (area = length x width)
 and the perimeter of rectangle (perimeter = 2 x (length + width)) */
let length = prompt('Enter the length of the rectangle:');
let width = prompt('Enter the width of the rectangle:');
alert(`The area of the rectangle is: ${parseInt(length) * parseInt(width)}\n and the perimeter is ${2*(parseInt(length) + parseInt(width))}`);

/* 13.- Using prompt get the year the user was born and if the user is 18 or above allow the user 
to drive if not tell the user to wait a certain amount of years. */
let now =new Date();
let birthYear = prompt('Enter birth year:')
let age = now.getFullYear() - birthYear
age >= 18 
? alert(`You are ${age}. You are old enough to drive`) 
:alert(`You are ${age}. You will be allowed to drive after ${18 - parseInt(age)} years.`)