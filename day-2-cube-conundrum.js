const RED_CUBES = 12;
const GREEN_CUBES = 13;
const BLUE_CUBES = 14;
const content = document.querySelector('pre').textContent;
const array = content.split('\n');
console.table(array.pop());
const result = array.reduce((accumulator, current) => {
  // get id
  const currentSplit = current.split(': ');
  // console.table(currentSplit);
  const id = currentSplit[0].match(/Game (\d+)/)[1];
  // console.log(id);

  const subsetsOfCubes = currentSplit[1].split('; ');
  // console.table(subsetsOfCubes);

  for(let i = 0; i < subsetsOfCubes.length; i++) {
    const red = subsetsOfCubes[i].match(/(\d+) red/) !== null ? +subsetsOfCubes[i].match(/(\d+) red/)[1] : 0;
    const blue = subsetsOfCubes[i].match(/(\d+) blue/) !== null ? +subsetsOfCubes[i].match(/(\d+) blue/)[1] : 0;
    const green = subsetsOfCubes[i].match(/(\d+) green/) !== null ? +subsetsOfCubes[i].match(/(\d+) green/)[1] : 0;
    // console.log(red, blue, green);

    if (red > RED_CUBES | blue > BLUE_CUBES | green > GREEN_CUBES) {
      return accumulator;
    }
  }

  return accumulator + +id;
}, 0);

console.log(result);