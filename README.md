Describe: beepBoop()

Test: "It should return an array of numbers from 0 to the user's inputted number.
Code: beepBoop(5)
Expected Output: [0, 1, 2, 3, 4, 5]

Describe: changeValue()

Test: "It should substitute the number 1 with the phrase "Beep!"
Code: changeValue(array)
Expected Output: [0, "Beep!", 2, 3, 4, 5]

Test: "It should substitute the number 2 with the phrase "Boop!"
Code: changeValue(array)
Expected Output: [0, "Beep!", "Boop!", 3, 4, 5]

Test: "It should substitute the number 3 with the phrase "Won't you be my neighbor?"
Code: changeValue(array)
Expected Output: [0, "Beep!", "Boop!", "Won't you be my neighbor?", 4, 5]

Test: "It should substitute all numbers between 10 to 19 with the phrase "Beep?"
Code: changeValue(array)
Expected Output: [0, 'Beep!', 'Boop!', "Won't you be my neighbor?", 4, 5, 6, 7, 8, 9, 'Beep!', 'Beep!', 'Beep!', 'Beep!', 'Beep!', 'Beep!', 'Beep!', 'Beep!', 'Beep!', 'Beep!', 'Beep!']