/**
 * Checks if a given integer is a prime number.
 * @param {number} n - The integer to check.
 * @returns {boolean} True if the number is prime, false otherwise.
 */
function isPrime(n) {
  // Handle edge cases for numbers less than or equal to 3
  if (n <= 1) return false;
  if (n <= 3) return true;

  // Eliminate even numbers and multiples of 3
  if (n % 2 === 0 || n % 3 === 0) return false;

  // Check factors up to the square root of n, incrementing by 6
  for (let i = 5; i * i <= n; i += 6) {
    if (n % i === 0 || n % (i + 2) === 0) {
      return false;
    }
  }

  return true;
}

module.exports = { isPrime };