import seedrandom from 'seedrandom';
import femaleNameDictionary from './femaleNameDictionary';
import maleNameDictionary from './maleNameDictionary';
import lastNameDictionary from './lastNameDictionary';

const fndLength = femaleNameDictionary.length;
const mndLength = maleNameDictionary.length;
const lndLength = lastNameDictionary.length;

function checkIfLastCharIsLetter(str: string) {
  let lastChar = str.charAt(str.length - 1);
  return (/[a-zA-Z]/).test(lastChar);
}

export function generatePredictableName(customerId: string) {
  const isFemale = checkIfLastCharIsLetter(customerId);
  const min = 0;
  const max = isFemale ? fndLength : mndLength;

  let x = seedrandom(customerId);
  let nameIndex = Math.floor(x() * (max - min) + min);
  let lastNameIndex = Math.floor(x() * (lndLength - min) + min);

  let name = isFemale ? femaleNameDictionary[nameIndex] : maleNameDictionary[nameIndex];
  let lastName = lastNameDictionary[lastNameIndex];
  return name + ' ' + lastName;
}