const fs = require('fs');

const MIN_AGE = 18;
const MAX_AGE = 30;
const PHONE_PREFIX_MIN = 100;
const PHONE_PREFIX_MAX = 999;
const PHONE_NUMBER_MIN = 100;
const PHONE_NUMBER_MAX = 999;
const NUM_PEOPLE = 20;

const genders = ['male', 'female'];
const maleNames = ['John', 'James', 'Robert', 'Michael', 'William'];
const femaleNames = ['Mary', 'Jennifer', 'Linda', 'Patricia', 'Elizabeth'];
const lastNames = ['Smith', 'Johnson', 'Brown', 'Taylor', 'Miller'];
const domains = ['gmail.com', 'yahoo.com', 'hotmail.com'];
const areaCodes = ['500', '600', '800'];

function randChoice(arr) {
  const index = Math.floor(Math.random() * arr.length);
  return arr[index];
}

function generatePhoneNumber() {
  const areaCode = randChoice(areaCodes);
  const prefix = Math.floor(Math.random() * (PHONE_PREFIX_MAX - PHONE_PREFIX_MIN + 1)) + PHONE_PREFIX_MIN;
  const lineNumber = Math.floor(Math.random() * (PHONE_NUMBER_MAX - PHONE_NUMBER_MIN + 1)) + PHONE_NUMBER_MIN;
  return `+48 ${areaCode} ${prefix} ${lineNumber}`;
}

function generateEmail(firstName, lastName) {
  const domain = randChoice(domains);
  const email = `${firstName.toLowerCase()}.${lastName.toLowerCase()}@${domain}`;
  return email;
}

const people = [];

for (let i = 0; i < NUM_PEOPLE; i++) {
  const person = {};

  person.gender = randChoice(genders);

  if (person.gender === 'male') {
    person.firstName = randChoice(maleNames);
  } else {
    person.firstName = randChoice(femaleNames);
  }

  person.lastName = randChoice(lastNames);
  person.age = Math.floor(Math.random() * (MAX_AGE - MIN_AGE + 1)) + MIN_AGE;
  person.phoneNumber = generatePhoneNumber();
  person.email = generateEmail(person.firstName, person.lastName);

  people.push(person);
}

const jsonData = JSON.stringify(people);

fs.writeFile('people.json', jsonData, 'utf8', (err) => {
  if (err) {
    console.error('Błąd zapisu pliku:', err);
  } else {
    console.log('Plik people.json został pomyślnie zapisany.');
  }
});
