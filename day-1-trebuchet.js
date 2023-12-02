const input = document.querySelector('pre').textContent;
const array = input.split('\n');
const spelledNumbers = {
  'zero': 0,
  'one': 1,
  'two': 2,
  'three': 3,
  'four': 4,
  'five': 5,
  'six': 6,
  'seven': 7,
  'eight': 8,
  'nine': 9,
  'ten': 10,
  'eleven': 11,
  'twelve': 12,
  'thirteen': 13,
  'fourteen': 14,
  'fifteen': 15,
  'sixteen': 16,
  'seventeen': 17,
  'eighteen': 18,
  'nineteen': 19,
  'twenty': 20,
  'thirty': 30,
  'forty': 40,
  'fifty': 50,
  'sixty': 60,
  'seventy': 70,
  'eighty': 80,
  'ninety': 90,
}
const keyValue = array.reduce((acc, cur) => {
  let firstDigit = 0;
  let secondDigit = 0;
  let firstDigitAux;
  let secondDigitAux;
  for (let i = 0; i < cur.length; i++) {
    if (Number.isInteger(+cur[i])) {
      firstDigit = cur[i];
      break;
    }

    //replaceAll dynamic
    for (let j = 3; j < 9; j++) {
      if (i + j > cur.length) {
        break;
      }
      if (spelledNumbers[cur.slice(i, i + j)] !== undefined) {
        firstDigitAux = spelledNumbers[cur.slice(i, i + j)];
        break;
      }
    }
    if (firstDigitAux !== undefined) {
      firstDigit = firstDigitAux;
      break;
    }
  }
  for (let i = cur.length - 1; i >= 0; i--) {
    if (Number.isInteger(+cur[i])) {
      secondDigit = cur[i];
      break;
    }

    //replaceAll dynamic
    for (let j = 2; j < 9; j++) {
      if (i - j < 0) {
        break;
      }
      if (spelledNumbers[cur.slice(i - j, i + 1)] !== undefined) {
        secondDigitAux = spelledNumbers[cur.slice(i - j, i + 1)];
        break;
      }
    }
    if (secondDigitAux !== undefined) {
      secondDigit = secondDigitAux;
      break;
    }
  }
  // console.log(`${cur} ${firstDigit}${secondDigit}`);
  return acc + +`${firstDigit}${secondDigit}`;
}, 0);
console.log(keyValue);