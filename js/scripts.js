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


const array = ["0", "1", "2", "3"]
function changeValue(array) {
  let list = array;
  for (let [i, v] of array.entries()) {
    if (v === "1") {
    array[i] = "Beep!";
    return array;
    }
  }
}