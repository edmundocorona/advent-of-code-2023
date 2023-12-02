const input = document.querySelector('pre').textContent;
const array = input.split('\n');
const keyValue = array.reduce((acc, cur) => {
  let firstDigit = 0;
  let secondDigit = 0;
  for (let i = 0; i < cur.length; i++) {
    if (Number.isInteger(+cur[i])) {
      firstDigit = cur[i];
      break;
    }
  }
  for (let i = cur.length - 1; i >= 0; i--) {
    if (Number.isInteger(+cur[i])) {
      secondDigit = cur[i];
      break;
    }
  }
  console.log(`${firstDigit}${secondDigit}`);
  return acc + +`${firstDigit}${secondDigit}`;
}, 0);