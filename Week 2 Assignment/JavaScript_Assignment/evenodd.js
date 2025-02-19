// Function to check if a number is even or odd
function checkEvenOrOdd(n) {
    if (n % 2 === 0) {
        return "Even";
    } else {
        return "Odd";
    }
}

// Test with a sample number
let number = 7;  // Change this to test different values
let result = checkEvenOrOdd(number);

// Output result
console.log(`The number ${number} is ${result}.`);
