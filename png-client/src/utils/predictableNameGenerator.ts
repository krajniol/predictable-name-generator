import seedrandom from 'seedrandom';
import firstNameDictionary from './firstNameDictionary';
import lastNameDictionary from './lastNameDictionary';

const fndLength = firstNameDictionary.length;
const lndLength = lastNameDictionary.length;

export function generatePredictableName(customerId: string) {
  const max = fndLength;

  let x = seedrandom(customerId);
  let firstNameIndex = Math.floor(x() * max);
  let lastNameIndex = Math.floor(x() * lndLength);

  let name = firstNameDictionary[firstNameIndex];
  let lastName = lastNameDictionary[lastNameIndex];
  return name + ' ' + lastName;
}