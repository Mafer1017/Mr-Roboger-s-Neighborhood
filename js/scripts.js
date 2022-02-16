// business Logic
function beepBoop(num) {
  let newArray = [];
  for(let i = 0; i <= num; i++) {
    newArray.push(i);
  }
  return newArray;
}

function changeValue(array) {
  for (let [i, v] of array.entries()) {
    const newString = v.toString();
    if (newString.includes(3)) {
      array[i] = "Won't you be my neighbor?";
    } else if (newString.includes(2)) {
      array[i] = "Boop!";
    } else if (newString.includes(1)) {
      array[i] = "Beep!";
    }
  }
  return array;
}

// UI Logic

$(document).ready(function() {
  $("form#new-array").submit(function(event) {
    event.preventDefault();
    const inputtedValue = $("input#new-range").val();
    const arrayFromInput =  beepBoop(inputtedValue);
    const outputArray = changeValue(arrayFromInput);
    $("#show-result").text(outputArray);
  });
})