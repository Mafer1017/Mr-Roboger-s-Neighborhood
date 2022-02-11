// business Logic

function beepBoop(num) {
  let sequence = "";
  for(let i = 0; i <= num; i++) {
    sequence += i;

    if (i < (num)) {
      sequence += ', ';
    }
  }
  return sequence;
}
