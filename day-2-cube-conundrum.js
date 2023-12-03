const RED_CUBES = 12;
const GREEN_CUBES = 13;
const BLUE_CUBES = 14;
const content = document.querySelector('pre').textContent;
const array = content.split('\n').slice(0, 10);
array.reduce((accumulator, current) => {
  // logic
  const id = current.match(/Game (\d+):/)[1];
  console.log(id);
  return accumulator + id;
}, 0);