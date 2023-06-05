const fs = require('fs');

const genders = ['male', 'female'];
const maleNames = ['John', 'James', 'Robert', 'Michael', 'William'];
const femaleNames = ['Mary', 'Jennifer', 'Linda', 'Patricia', 'Elizabeth'];
const lastNames = ['Smith', 'Johnson', 'Brown', 'Taylor', 'Miller'];

function randChoice(arr) {
  const index = Math.floor(Math.random() * arr.length);
  return arr[index];
}

const people = [];

for (let i = 0; i < 20; i++) {
  const person = {};

  person.gender = randChoice(genders);

  if (person.gender === 'male') {
    person.firstName = randChoice(maleNames);
  } else {
    person.firstName = randChoice(femaleNames);
  }

  person.lastName = randChoice(lastNames);
  person.age = Math.floor(Math.random() * 30) + 18;

  // 
  const domains = ['gmail.com', 'yahoo.com', 'hotmail.com'];
  const areaCodes = ['500', '600', '800'];

  // Generate phone numbers
  function generatePhoneNumber() {
    const areaCode = randChoice(areaCodes);
    const prefix = Math.floor(Math.random() * 900) + 100;
    const lineNumber = Math.floor(Math.random() * 900) + 100;
    return `+48 ${areaCode} ${prefix} ${lineNumber}`;
  }

  // Generate email adress
  function generateEmail(firstName, lastName) {
    const domain = randChoice(domains);
    const email = `${firstName.toLowerCase()}.${lastName.toLowerCase()}@${domain}`;
    return email;
  }

  person.phoneNumber = generatePhoneNumber();
  person.email = generateEmail(person.firstName, person.lastName);

  people.push(person);
}

const jsonData = JSON.stringify(people);

// Errors 
fs.writeFile('people.json', jsonData, 'utf8', (err) => {
  if (err) {
    console.error('Błąd zapisu pliku:', err);
  } else {
    console.log('Plik people.json został pomyślnie zapisany.');
  }
});
