/* 1.- Write a program which tells the number of days in a month. */
let month = prompt('Please enter a month:').toLowerCase();
switch(month) {
  case 'september':
    alert(`${month} has 30 days.`);
    break;
  case 'october':
    alert(`${month} has 31 days.`);
    break;
  case 'november':
    alert(`${month} has 30 days.`);
    break;
  case 'december':
    alert(`${month} has 31 days.`);
    break;
  case 'january':
    alert(`${month} has 31 days.`);
    break;
  case 'february':
    alert(`${month} has 28 days.`);
    break;
  case 'march':
    alert(`${month} has 31 days.`);
    break;
  case 'april':
    alert(`${month} has 30 days.`);
    break;
  case 'may':
    alert(`${month} has 31 days.`);
    break;
  case 'june':
    alert(`${month} has 30 days.`);
    break;
  case 'july':
    alert(`${month} has 31 days.`);
    break;
  case 'august':
    alert(`${month} has 31 days.`);
    break;
  default:
    alert(`${month} is not a valid month`);
}