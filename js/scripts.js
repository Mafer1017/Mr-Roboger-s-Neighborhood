// business Logic
let sequence = "";
let sequenceRef = sequence;

function beepBoop(num) {
  for(let i = 0; i <= num; i++) {
    sequence += i;

    if (i < (num)) {
      sequence += ', ';
    }
  }
  return sequence;
}

const array = [0, 1, 2, 3, 4, 5]
function changeValue(array) {
  for (let [i, v] of array.entries()) {
    if (v === 1) {
    array[i] = "Beep!";
    continue;
    } else if (v === 2) {
        array[i] = "Boop!";
        return array;
    }
  }
}