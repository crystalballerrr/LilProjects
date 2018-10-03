function getSleepHours(day) {
  switch(day) {
    case 'monday':
      return 8;
      break;
    case 'tuesday':
      return 8;
      break;
    case 'wednesday':
      return 8;
      break;
    case 'thursday':
      return 8;
      break;
    case 'friday':
      return 8;
      break;
    case 'saturday':
      return 8;
      break;
    case 'sunday':
      return 8;
      break;
  }
}
const getActualSleepHours = () =>
getSleepHours('monday') + 
getSleepHours('tuesday') +
getSleepHours('wednesday') +
getSleepHours('thursday') +
getSleepHours('friday') +
getSleepHours('saturday') +
getSleepHours('sunday');

const getIdealSleepHours = () => {
  const idealHours = 7;
  return idealHours * 7;
}
function calculateSleepDebt() {
  var actualSleepHours = getActualSleepHours();
  var idealSleepHours = getIdealSleepHours();
  
  if(actualSleepHours === idealSleepHours) {
  console.log(`You got enough sleep! You got ${actualSleepHours} hours of sleep!`);
	}
  if(actualSleepHours > idealSleepHours) {
    console.log(`You got more sleep than enough sleep! You got ${actualSleepHours} hours of sleep!`);
  }
  else {
    console.log(`You need more rest. You got ${actualSleepHours} of sleep!`);
  }
}
calculateSleepDebt()
