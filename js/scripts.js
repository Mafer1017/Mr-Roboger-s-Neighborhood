// business Logic
let sequence = "";
let sequenceRef = sequence;

function beepBoop(num) {
  let array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,];
  for(let i = 0; i <= num; i++) {
    sequence += i;

    if (i < (num)) {
      sequence += ', ';
    }
  }
  return sequence;
}

let array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,];
function changeValue(array) {
  for (let [i, v] of array.entries()) {
    if (v === 1) {
    array[i] = "Beep!";
    continue;
    } else if (v === 2) {
        array[i] = "Boop!";
        continue;
    } else if (v === 3) {
        array[i] = "Won't you be my neighbor?";
        continue;
    } else if (v >= 10) {
      array[i] = "Beep!";
      continue;
    }
  }
  return array;
}