const content = document.querySelector('pre').textContent;
const array = content.split('\n').slice(0, -1);
// console.table(array);

// const sumPartNumbers = array.reduce((accumulator, current) => {
//   for (let i = 0; i < current.length; i++) {
//     if (current[i].match(/[^.\d\n]/)) {
//       console.log(current[i]);
//     }
//   }
//   return accumulator + current;
// }, 0);

const midState = new Array(array.length);
for (let i = 0; i < midState.length; i++) {
  midState[i] = new Array(array[i].length).fill('.');
}

let sumPartNumbers = 0;

for (let i = 0; i < array.length; i++) {
  const current = array[i];
  // const currentMidState = new Array(current.length).fill('.');
  for (let j = 0; j < current.length; j++) {
    if (current[j].match(/[^.\d\n]/)) {
      if (i - 1 >= 0) {
        if (j - 1 >= 0) {
          midState[i - 1][j - 1] = array[i - 1][j - 1];          
        }
        midState[i - 1][j] = array[i - 1][j];
        if (j + 1 < array[i - 1].length) {
          midState[i - 1][j + 1] = array[i - 1][j + 1];
        }
      }

      if (j - 1 >= 0) {
        midState[i][j - 1] = array[i][j - 1];
      }
      midState[i][j] = array[i][j];
      if (j + 1 < array[i].length) {
        midState[i][j + 1] = array[i][j + 1];
      }

      if (i + 1 < array.length) {
        if (j - 1 >= 0) {
          midState[i + 1][j - 1] = array[i + 1][j - 1];          
        }
        midState[i + 1][j] = array[i + 1][j];
        if (j + 1 < array[i + 1].length) {
          midState[i + 1][j + 1] = array[i + 1][j + 1];
        }
      }
    }
  }
  // midState.push(currentMidState);
}

console.log(midState);

const searchLeft = function (i, j) {
  if (j - 1 >= 0) {
    if (array[i][j - 1].match(/\d/)) {
      midState[i][j - 1] = array[i][j - 1];
      searchLeft(i, j - 1);
    }
  }
}

const searchRight = function (i, j) {
  if (j + 1 < array[i].length) {
    if (array[i][j + 1].match(/\d/)) {
      midState[i][j + 1] = array[i][j + 1];
      searchRight(i, j + 1);
    }
  }
}

for (let i = 0; i < midState.length; i++) {
  for (let j = 0; j < midState[i].length; j++) {
    if (midState[i][j].match(/\d/)) {
      searchLeft(i, j);
      searchRight(i, j);
    }
  }
}

console.log(midState);

for (i = 0; i < midState.length; i++) {
  const numbers = midState[i].join('').match(/(\d+)/g);
  console.log(numbers);
  for (j = 0; j < numbers.length; j++) {

    sumPartNumbers += +numbers[j];
  }
}

console.log(sumPartNumbers);