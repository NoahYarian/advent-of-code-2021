let dumbos = [[1,5,6,4,5,2,4,2,2,6],[1,3,8,4,5,5,4,6,8,5],[7,5,8,2,2,6,4,8,3,5],[8,8,1,2,6,7,2,2,7,2],[1,1,6,1,4,6,3,1,3,7],[7,8,3,1,7,6,2,3,4,4],[2,8,5,5,5,2,7,7,4,8],[6,1,4,1,7,3,7,8,7,4],[8,6,1,1,4,5,8,3,1,3],[8,2,1,5,3,7,2,4,4,3]];

function getAdjacentCoords(rowAndCol) {
  [row, col] = rowAndCol;
  let al, a, ar, l, r, bl, b, br;
  al = (row > 0 && col > 0) ? [row-1, col-1] : null;
  a = (row > 0) ? [row-1, col] : null;
  ar = (row > 0 && col < 9) ? [row-1, col+1] : null;
  l = (col > 0) ? [row, col-1] : null;
  r = (col < 9) ? [row, col+1] : null;
  bl = (row < 9 && col > 0) ? [row+1, col-1] : null;
  b = (row < 9) ? [row+1, col] : null;
  br = (row < 9 && col < 9) ? [row+1, col+1] : null;
  return [al, a, ar, l, r, bl, b, br]; 
}

function increaseEnergyOfAll(dumbos) {
  let increased = [];
  for (let i = 0, row; i < 10; i++) {
    row = [];
    for (let j = 0; j < 10; j++) {
      row.push(dumbos[i][j] + 1);
    }
    increased.push(row);
  }
  return increased;
}

function hasFlashed(rowAndCol, flashedDumbos) {
  [row, col] = rowAndCol;
  for (let i = 0; i < flashedDumbos; i++) {
    if (flashedDumbos[i][0] === row && flashedDumbos[i][1] === col) {
      return true;
    }
  }
  return false;
}

function step(isInitialRound = true, flashedDumbos = []) {
  if (isInitialRound) dumbos = increaseEnergyOfAll(dumbos);
  let newFlashes = [];
  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      if (dumbos[i][j] > 9 && !hasFlashed([i,j], flashedDumbos)) {
        newFlashes.push([i,j]);
        flashedDumbos.push([i,j]);
      }
    }
  }
  if (newFlashes.length > 0) {
    flash(newFlashes, flashedDumbos);
    return step(false, flashedDumbos);
  } else {
    return flashedDumbos.length;
  }
}

function flash(flashes, flashedDumbos) {
  let adjacentToFlashes = [];
  for (let i = 0; i < flashes.length; i++) {
    adjacentToFlashes = adjacentToFlashes.concat(getAdjacentCoords(flashes[i]));
  }
  for (let i = 0, row, col; i < adjacentToFlashes.length; i++) {
    if (adjacentToFlashes[i] === null) continue;
    [row, col] = adjacentToFlashes[i];
    dumbos[row][col]++;
  }
  for (let i = 0, row, col; i < flashedDumbos.length; i++) {
    [row,col] = flashedDumbos[i];
    dumbos[row][col] = 0;
  }
}

function stepXTimes(x) {
  let total = 0;
  for (let i = 0; i < x; i++) {
    total += step();
  }
  return total;
}
// console.log("total flashes after 100 steps: " + stepXTimes(100));

/////////////////

function stepUntilSynced() {
  let counter = 0;
  while (!isAllZeros()) {
    step();
    counter++;
  }
  return counter;
}

function isAllZeros() {
  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      if (dumbos[i][j] !== 0) return false;
    }
  }
  console.log("all zeros");
  return true;
}
