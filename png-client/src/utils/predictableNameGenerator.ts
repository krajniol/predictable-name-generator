import seedrandom from 'seedrandom';
import firstNameDictionary from './firstNameDictionary';
import lastNameDictionary from './lastNameDictionary';

export function generatePredictableName(customerId: string) {
  const fndLength = firstNameDictionary.length;
  const lndLength = lastNameDictionary.length;
  const max = fndLength;

  const x = seedrandom(customerId);
  const firstNameIndex = Math.floor(x() * max);
  const lastNameIndex = Math.floor(x() * lndLength);

  let name = firstNameDictionary[firstNameIndex];
  let lastName = lastNameDictionary[lastNameIndex];
  return name + ' ' + lastName;
}