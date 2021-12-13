let fishArr = [1,4,3,3,1,3,1,1,1,2,1,1,1,4,4,1,5,5,3,1,3,5,2,1,5,2,4,1,4,5,4,1,5,1,5,5,1,1,1,4,1,5,1,1,1,1,1,4,1,2,5,1,4,1,2,1,1,5,1,1,1,1,4,1,5,1,1,2,1,4,5,1,2,1,2,2,1,1,1,1,1,5,5,3,1,1,1,1,1,4,2,4,1,2,1,4,2,3,1,4,5,3,3,2,1,1,5,4,1,1,1,2,1,1,5,4,5,1,3,1,1,1,1,1,1,2,1,3,1,2,1,1,1,1,1,1,1,2,1,1,1,1,2,1,1,1,1,1,1,4,5,1,3,1,4,4,2,3,4,1,1,1,5,1,1,1,4,1,5,4,3,1,5,1,1,1,1,1,5,4,1,1,1,4,3,1,3,3,1,3,2,1,1,3,1,1,4,5,1,1,1,1,1,3,1,4,1,3,1,5,4,5,1,1,5,1,1,4,1,1,1,3,1,1,4,2,3,1,1,1,1,2,4,1,1,1,1,1,2,3,1,5,5,1,4,1,1,1,1,3,3,1,4,1,2,1,3,1,1,1,3,2,2,1,5,1,1,3,2,1,1,5,1,1,1,1,1,1,1,1,1,1,2,5,1,1,1,1,3,1,1,1,1,1,1,1,1,5,5,1];

function ageFishOneDay(fishPopulation) {
  let newFishPopulation = [];

  // subtract 1 from all fish timers
  // if they reach -1 set them to 6 and add another fish timer set to 8

  for (let i = 0; i < fishPopulation.length; i++) {
    if (fishPopulation[i] === 0) {
      newFishPopulation.push(6);
      newFishPopulation.push(8);
    } else {
      newFishPopulation.push(fishPopulation[i]-1);
    }
  }
  return newFishPopulation;
}

function ageFish(fish, days) {
  for (let i = 0; i < days; i++) {
    fish = ageFishOneDay(fish);
  }
  return fish.length;
}
// ageFish(fishArr, 80);

////////////////////////


function createFishTally (fishArr) {
  let fishTally = [0,0,0,0,0,0,0,0,0];
  for (let i = 0, fishAge; i < fishArr.length; i++) {
    fishAge = fishArr[i];
    fishTally[fishAge]++;
  }
  return fishTally;
}
let fishTally = createFishTally(fishArr);

function arraysAreEqual(arr1, arr2) {
  if (!Array.isArray(arr1) || !Array.isArray(arr2)) return false;
  if (arr1.length !== arr2.length) return false;
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) return false;
  }
  return true;
}

console.assert(arraysAreEqual(createFishTally([3,4,3,1,2]),[0,1,1,2,1,0,0,0,0]), "fail");
console.assert(arraysAreEqual(createFishTally([0,1,2,3,4,5,6,7,8,0,1,2,3,4,5,6,7,8]),[2,2,2,2,2,2,2,2,2]), "fail");


function ageFishTallyOneDay(fishTally) {
  let numberOfNewFish = fishTally[0];
  let newFishTally = fishTally.slice(1);
  newFishTally.push(numberOfNewFish);
  newFishTally[6] += numberOfNewFish;
  return newFishTally;
}

const sampleAfter9Days = [1,2,1,6,0,1,2,3,3,4,8];
const sampleAfter10Days = [0,1,0,5,6,0,1,2,2,3,7,8];
console.assert(arraysAreEqual(ageFishTallyOneDay(createFishTally(sampleAfter9Days)), createFishTally(sampleAfter10Days)), "fail");

function ageFishTally(fishTally, days) {
  for (let i = 0; i < days; i++) {
    fishTally = ageFishTallyOneDay(fishTally);
  }
  return fishTally.reduce((sum, disFish) => {
    return sum + disFish;
  }, 0);
}

const sample = [3,4,3,1,2];
const sampleTally = createFishTally(sample);
console.assert(ageFishTally(sampleTally, 18) === 26, "ageFishTally failed");
console.assert(ageFishTally(sampleTally, 80) === 5934, "ageFishTally failed");

ageFishTally(fishTally, 256);
