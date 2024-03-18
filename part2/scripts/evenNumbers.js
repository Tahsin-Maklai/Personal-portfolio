const numbers = [8, 6, 4, 3, 10];
const notEven = [];

// Function to determine if a number is even
function isEven(number) {
    return number % 2 === 0;
}

function even(numbersArray) {
    for (let i = 0; i < numbersArray.length; i++) {
        if (!isEven(numbersArray[i])) {
            notEven.push(numbersArray[i]);
        }
    }
}

// Call the even function with the numbers array
even(numbers);

// Check if the notEven array is empty
const allEven = notEven.length === 0;

console.log("Array contains only even numbers:", allEven);