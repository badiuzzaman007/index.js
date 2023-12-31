// Function to square a fraction
function squareFraction(num, denom) {
  let resultNum = num * num;
  let resultDenom = denom * denom;
  return simplifyFraction(resultNum, resultDenom);
}

// Function to simplify a fraction
function simplifyFraction(num, denom) {
  let gcd = findGCD(num, denom);
  return [num / gcd, denom / gcd];
}

// Function to find the greatest common divisor (GCD)
function findGCD(a, b) {
  return b === 0 ? a : findGCD(b, a % b);
}

// Example usage
let fraction = [5];

let squareResult = squareFraction(...fraction);

console.log("Square:", squareResult);  // Output: [25]

// Function to find the sum of a number sequence
function findSum(numbers) {
  return numbers.reduce((acc, num) => acc + num, 0);
}

// Example usage
let sequence = [1, 2, 3, 4, 5];

let total = findSum(sequence);

console.log("Total:", total);  // Output: 15
// Function to identify the longest name in an array
function findLongestName(names) {
  if (names.length === 0) {
      return "No names provided.";
  }

  let longestName = names[0];

  for (let i = 1; i < names.length; i++) {
      if (names[i].length > longestName.length) {
          longestName = names[i];
      }
  }

  return longestName;
}

// Example usage
let namesList = ["Mukul", "rocky", "Badiuzzaman", "Hasi", "Eva"];

let longestName = findLongestName(namesList);

console.log("Longest Name:", longestName);  // Output: Badiuzzaman

// Function to check if a year is a leap year
function isLeapYear(year) {
  // Leap years are divisible by 4
  // Exception: Years divisible by 100 are not leap years unless they are also divisible by 400
  return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
}

// Example usage
let yearToCheck = 2024;

if (isLeapYear(yearToCheck)) {
  console.log(yearToCheck + " is a leap year.");
} else {
  console.log(yearToCheck + " is not a leap year.");
}

// Function to calculate the total cost of items
function calculateTotalCost(items) {
  if (!Array.isArray(items) || items.length === 0) {
      return "Invalid items information.";
  }

  // Calculate total cost
  const totalCost = items.reduce((acc, item) => {
      if (typeof item === 'object' && 'price' in item && 'quantity' in item) {
          return acc + item.price * item.quantity;
      }
      return acc;
  }, 0);

  return totalCost;
}

// Example items
let items = [
  { name: 'Shirt', price: 500, quantity: 2 },
  { name: 'Pant', price: 700, quantity: 2 },
  { name: 'Watch', price: 200, quantity: 1 },
  { name: 'Glass', price: 100, quantity: 1 },
];

// Calculate total cost
let totalCost = calculateTotalCost(items);

console.log("Total cost:", totalCost);



