/* 1.- Write a code which can give grades to students according to theirs scores:
90-100, A; 70-89, B; 60-69, C; 50-59, D; 0-49, F */
const score = parseInt(prompt('Enter a score:'));
switch(true){
  case score < 49:
    alert('Grade: F');
    break;
  case score >= 50 && score<=59:
    alert('Grade: D');
    break;
  case score >= 60 && score<=69:
    alert('Grade: C');
    break;
  case score >= 70 && score<=89:
    alert('Grade: B');
    break;
  case score >= 90 && score<=100:
    alert('Grade: A');
    break;
  default:
    alert('Entered value was not a number');
}

/* 2.- Check if the season is Autumn, Winter, Spring or Summer. If the user input is:
September, October or November, the season is Autumn.
December, January or February, the season is Winter. 
March, April or May, th season is Spring. 
June, July or August, the season is Summer. */
let month = prompt('Please enter a month:').toLowerCase();
switch(month) {
  case 'september':
    alert('The season is Autumn.');
    break;
  case 'october':
    alert('The season is Autumn.');
    break;
  case 'november':
    alert('The season is Autumn.');
    break;
  case 'december':
    alert('The season is Winter.');
    break;
  case 'january':
    alert('The season is Winter.');
    break;
  case 'february':
    alert('The season is Winter.');
    break;
  case 'march':
    alert('The season is Spring.');
    break;
  case 'april':
    alert('The season is Spring.');
    break;
  case 'may':
    alert('The season is Spring.');
    break;
  case 'june':
    alert('The season is Summer.');
    break;
  case 'july':
    alert('The season is Summer.');
    break;
  case 'august':
    alert('The season is Summer.');
    break;
  default:
    alert(`${month} is not a valid month`);
}

/* 3.- Check if a day is weekend day or a working day.Your script will take day as an input. */
let day = prompt('What is the day today?').toLowerCase();
switch(day) {
  case 'sunday':
    alert(`${day} is a weekend`);
    break;
  case 'monday':
    alert(`${day} is a working day`);
    break;
  case 'tuesday':
    alert(`${day} is a working day`);
    break;
  case 'wenesday':
    alert(`${day} is a working day`);
    break;
  case 'thusday':
    alert(`${day} is a working day`);
    break;
  case 'friday':
    alert(`${day} is a working day`);
    break;
  case 'saturday':
    alert(`${day} is a weekend`);
    break;
  default:
    alert(`${month} is not a valid day`);
}
