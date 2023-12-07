const content = document.querySelector('pre').textContent;
const array = content.split('\n').slice(0, -1);

const MAPS_HEADERS = [
  "seed-to-soil map:",
  "soil-to-fertilizer map:",
  "fertilizer-to-water map:",
  "water-to-light map:",
  "light-to-temperature map:",
  "temperature-to-humidity map:",
  "humidity-to-location map:"
];

const seeds = array[0].match(/\d+/g);

const maps = new Array(MAPS_HEADERS.length);
for (let i = 0; i < maps.length; i++) {
  maps[i] = array.slice(
    array.indexOf(MAPS_HEADERS[i]) + 1,
    i + 1 < maps.length ? array.indexOf(MAPS_HEADERS[i + 1]) - 1 : array.length
  );
}

//given a number pass trough a matrix
const magicBox = function (number, array) { 
  for (let i = 0; i < array.length; i++) {
    const map = array[i].split(' ');
    const destinationRangeStart = +map[0];
    const sourceRangeStart = +map[1];
    const rangeLength = +map[2];
    if (sourceRangeStart <= number & number < sourceRangeStart + rangeLength) {
      return destinationRangeStart + number - sourceRangeStart;
    }
  }
  return number;
};

const calcLocation = function (seed) {
  return maps.reduce((acc, curr) => {
    return magicBox(acc, curr);
  }, seed);
}

const lowestLocation = seeds.reduce((min, curr) => {
  const location = calcLocation(+curr);
  if (min === undefined) {
    return location;
  }
  return location < min ? location : min;
}, undefined);

console.log(lowestLocation);  // 1181555926

// part two
const setSeeds = new Array (seeds.length / 2);
for (let i = 0; i < setSeeds.length; i++) {
  setSeeds[i] = [+seeds[2 * i], +seeds[2 * i + 1]];
}

console.table(setSeeds);

let minLocation = calcLocation(setSeeds[0][0]);

console.log(minLocation, calcLocation(364807853));

for (let i = 0; i < setSeeds.length; i++) {
  for (let j = 0; j < setSeeds[i][1]; j++) {
    const location = calcLocation(setSeeds[i][0] + j);
    if (location < minLocation) {
      minLocation = location;
    }
  }
  console.log(setSeeds[i][0]);
}

console.log('result', minLocation);