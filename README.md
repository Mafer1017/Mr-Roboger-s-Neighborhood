# Mr. Roboger's Neighborhood

##### By: Marcus Ferreira

#### An Application that replaces integers in an array with phrases

## Technologies Used

* Javascript
* HTML/CSS
* Bootstrap

## Setup/Installation Requirements

* Clone or download this repository onto your desktop
* Navigate to top-level of directory
* Open index.html in the browser of your choice

## Tests:

#### Describe: beepBoop()

- Test: "It should return an array of numbers from 0 to the user's inputted number.
- Code: beepBoop(5)
- Expected Output: [0, 1, 2, 3, 4, 5]
---
#### Describe: changeValue()

- Test: "It should substitute the number 1 with the phrase "Beep!"
- Code: changeValue(myArray)
- Const myArray = beepBoop(5)
- Expected Output: [0, "Beep!", 2, 3, 4, 5]
---
- Test: "It should substitute the number 2 with the phrase "Boop!"
- Code: changeValue(array)
-Expected Output: [0, "Beep!", "Boop!", 3, 4, 5]
---
- Test: "It should substitute the number 3 with the phrase "Won't you be my neighbor?"
- Code: changeValue(myArray)
- Const myArray = beepBoop(5)
- Expected Output: [0, "Beep!", "Boop!", "Won't you be my neighbor?", 4, 5]
---
- Test: "It should prioritize replacing numbers with phrases following a hierarchy of substitutions. The substitution for the number 1 should apply unless there's a 2 or 3 present in the number. Then, the substitution for the number 2 should apply unless there's a 3 present in the number.
- Code: changeValue(myArray)
- Const: myArray = beepBoop(20)
- Expected Output: [0, 'Beep!', 'Boop!', "Won't you be my neighbor?", 4, 5, 6, 7, 8, 9, 'Beep!', 'Beep!', 'Boop!', "Won't you be my neighbor?", 'Beep!', 'Beep!', 'Beep!', 'Beep!', 'Beep!', 'Beep!', 'Boop!']
---

## License

[MIT](https://opensource.org/licenses/MIT)


Copyright (c) 2021 Marcus Ferreira