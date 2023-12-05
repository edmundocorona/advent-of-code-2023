const content = document.querySelector('pre').textContent;
const array = content.split('\n').slice(0, 10);

// sum all products
let accumulator = 0;
const sumProducts = function (product) {
  accumulator += product;
};

// multiply the numbers
const multiplyNumbers = function (array) {
  return array[0] * array[1] + array[2] * array[3];
};

// complete the number
const lookLeftDigits = function (i, j) {
  const leftCell = array[i][j - 1];
  // if (leftCell === undefined) {
  //   return '';
  // }
  if (leftCell !== undefined & leftCell.match(/\d/)) {
    return lookLeftDigits(i, j - 1) + leftCell;
  }
  return '';
};

const lookRightDigits = function (i, j) {
  const rightCell = array[i][j + 1];
  if (rightCell !== undefined & rightCell.match(/\d/)) {
    return rightCell + lookRightDigits(i, j + 1);
  }
  return '';
};

// look around for digits
const getNumbersAround = function (i, j) {
  const numbersAround = [];
  for (let k = -1; k <= 1; k++) {
    for (let l = -1; l <= 1; l++) {
      if (0 <= i + k & i + k < array.length 
        & 0 <= j + l & j + l < array[i].length) {
        const cell = array[i + k][j + l];
        if (cell !== undefined) {
          if (cell.match(/\d/)) {
            const leftDigits = lookLeftDigits(i + k, j + l);
            const rightDigits = lookRightDigits(i + k, j + l);
            const fullNumber = leftDigits + cell + rightDigits;
            numbersAround.push(fullNumber);
  
            // jumps
            l += rightDigits.length;
          }
        }
      }
    }
  }
  return numbersAround;
};

// find the asterisk
for (let i = 0; i < array.length; i++) {
  for (let j = 0; j < array[i].length; j++) {
    if (array[i][j].match(/\*/)) {
      sumProducts(multiplyNumbers(getNumbersAround(i, j)));
    }
  }
}

console.log(accumulator);
