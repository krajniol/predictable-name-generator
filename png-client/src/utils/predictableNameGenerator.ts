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
    const max = isFemale ? fndLength : mndLength;

    let x = seedrandom(customerId.substring(0, customerId.length / 2));
    let y = seedrandom(customerId.substring(customerId.length / 2, customerId.length));
    let nameIndex = Math.floor(x() * max);
    let lastNameIndex = Math.floor(y() * lndLength);

    let name = isFemale ? femaleNameDictionary[nameIndex] : maleNameDictionary[nameIndex];
    let lastName = lastNameDictionary[lastNameIndex];
    return name + ' ' + lastName;
}