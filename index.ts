const arr = [1, 2, 4, 4, 3, 3, 3, 4, 4, 5,5,5,5,5,5,5];

const map = {};

for (const i of arr) {
  if (!map[i]) map[i] = 0;
  map[i]++;
}

let max = Number.MIN_SAFE_INTEGER;
let maxval = null;

for (const k of Object.keys(map)) {
  if (map[k] > max) {
    maxval = k;
    max = map[k];
  }
}

console.log(maxval);
