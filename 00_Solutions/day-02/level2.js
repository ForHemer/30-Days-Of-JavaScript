console.log("The quote 'There is no exercise better for the heart than reaching down\
 and lifting people up.' by John Holmes teaches us to help one another.");

console.log("\"Love is not patronizing and charity isn't about pity, it is about love.\
 Charity and love are the same -- with charity you give love, so don't just give money\
  but reach out your hand instead.\"");

// 3.- Check if typeof '10' is exactly equal to 10. If not make it exactly equal.
console.log(parseInt('10') == 10); //or
console.log(+('10') == 10); //or
console.log(Number('10') == 10);

// 4.- Check if parseFloat('9.8') is equal to 10 if not make it exactly equal with 10.
console.log(Math.round(parseFloat('9.8')) == 10); //or
console.log(Math.ceil(parseFloat('9.8')) == 10);

// 5.- Check if 'on' is found in both python and jargon
console.log('python'.includes('on') && 'jargon'.includes('on'));

// 6.- Check if 'jargon' is in the sentence
console.log('I hope this course is not full of jargon'.includes('jargon'));

// 7.- Generate a random number between 0 and 100 inclusively.
console.log(Math.floor(Math.random()*101));

// 8.- Generate a random number between 50 and 100 inclusively
console.log(Math.floor(Math.random()*51)+50);

// 9 Generate a random number between 0 and 255
console.log(Math.floor(Math.random()* 256));

// 10.- Access the 'JavaScript' string characters using a random number.
console.log('JavaScript'.charAt(Math.floor(Math.random()*10)));

/* 11.- Use Use console.log() and escape characters to print the following pattern.
1 1 1 1 1
2 1 2 4 8
3 1 3 9 27
4 1 4 16 64
5 1 5 25 125 */
console.log("1\t1\t1\t1\t1\n\
2\t1\t2\t4\t8\n\
3\t1\t3\t9\t27\n\
4\t1\t4\t16\t64\n\
5\t1\t5\t25\t125")

/* 12.- Use 'substr' to slice out the phrase 'because because because' from
 the following sentence: 'You cannot end a sentence with because because because is a conjunction' */
 console.log('You cannot end a sentence with because because because is a conjunction'.substr(31));
