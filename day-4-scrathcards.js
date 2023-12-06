const content = document.querySelector('pre').textContent;
const array = content.split('\n').slice(0, -1);

// divide card number, winner numbers, played numbers
const parseNumbers = function (string) {
  const numbers = string.split(': ')[1].split(' | ');
  numbers[0] = numbers[0].match(/\d+/g);
  numbers[1] = numbers[1].match(/\d+/g);
  // console.log(numbers);
  return numbers;
};

// look for winner numbers in played numbers
const countMatches = function (array) {
  return array[0].reduce((accumulator, current) => {
    if(array[1].includes(current)) {
      return accumulator + 1;
    }
    return accumulator;
  }, 0)
};

// if you find numbers add 1, 2, 4, 8, 16 -- calc points
const calcPoints = function (numberMatches) {
  return numberMatches > 0 ? Math.pow(2, numberMatches - 1) : 0;
};

// sum all points
const sumPoints = array.reduce((accumulator, current) => {
  const numbers = parseNumbers(current);
  const matches = countMatches(numbers);
  const points =calcPoints(matches);
  return accumulator + points;
}
, 0);

console.log(sumPoints);

// let givenCards = 1;
let index = 0;
const copies = new Array(array.length).fill(1);
// modify
while (index < array.length) {
  // givenCards--;
  const numbers = parseNumbers(array[index]);
  const matches = countMatches(numbers);

  // if(matches === 0) {
  //   copies[index] = 0;
  // }
  // console.log(index, matches);

  for(let i = 1; i <= matches; i++) {
    copies[index + i] += copies[index];
    // console.log(index, matches, `copies[${index + i}] : ${copies[index + i]}`);
  }

  // console.log(index, givenCards);
  // if (matches > givenCards) {
  //   givenCards = matches;
  // }
  // console.log(index, givenCards, matches);
  index++;
  // console.log(index);
}

console.log(copies);

const totalScratchcards = copies.reduce((acc, curr) => {
  return acc + curr;
}, 0);

console.log(totalScratchcards);