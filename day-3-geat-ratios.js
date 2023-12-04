const content = document.querySelector('pre').textContent;
const array = content.split('\n').slice(0, -1).slice(0, 10);
console.table(array);

// const sumPartNumbers = array.reduce((accumulator, current) => {
//   for (let i = 0; i < current.length; i++) {
//     if (current[i].match(/[^.\d\n]/)) {
//       console.log(current[i]);
//     }
//   }
//   return accumulator + current;
// }, 0);


const sumPartNumbers = 0;
for (let i = 0; i < array.length; i++) {
  const current = array[i];
  for (let j = 0; j < current.length; j++) {
    if (current[j].match(/[^.\d\n]/)) {
      let upLeft = '';
      let upMid = '';
      let upRight = '';
      let currentLeft = '';
      let currentRight = '';
      let downLeft = '';
      let downMid = '';
      let downRight = '';

      if (i - 1 >= 0) {
        upLeft = j - 1 >= 0 ? array[i - 1][j - 1] : '';
        upMid = array[i - 1][j];
        upRight = j - 1 < array[i].length ? array[i - 1][j + 1] : '';
      }
      
      currentLeft = j - 1 >= 0 ? current[j - 1] : '';
      currentRight = j + 1 < current.length ? current[j + 1] : '';

      if (i + 1 < array.length) {
        downLeft = j - 1 >= 0 ? array[i + 1][j - 1] : '';
        downMid = array[i + 1][j];
        downRight = j + 1 < array[i + 1].length ? array[i + 1][j + 1] : '';
      }

      console.log(upLeft, upMid, upRight);
      console.log(currentLeft, current[j], currentRight);
      console.log(downLeft, downMid, downRight);
    }
  }
}