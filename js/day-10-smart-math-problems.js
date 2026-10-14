// Find the Greatest Common Factor (GCF/GCD) of two numbers.
{
  // function gcf(a, b) {
  //   if (a === b) return a;
  //   if (a > b) return gcf(a - b, b);
  //   return gcf(a, b - a);
  // }
  // console.log(gcf(20, 32));
}
// Better ->
{
  // function gcf(a, b) {
  //   if (b === 0) return a;
  //   return gcf(b, a % b);
  // }
  // console.log(gcf(20, 32));
}

// Factors of a number.
{
  // let n = 100;
  // let limit = Math.floor(Math.sqrt(n));
  // for (let i = 1; i <= limit; i++) {
  //   if (n % i === 0) {
  //     console.log(i);
  //   }
  // }
  // for (let i = limit; i >= 1; i--) {
  //   if (n % i === 0 && n / i !== i) {
  //     console.log(n / i);
  //   }
  // }
}
// Recursion ->
{
  //   function printFactors(n) {
  //     let limit = Math.floor(Math.sqrt(n));
  //     function printSmallFactors(i) {
  //       if (i > limit) return;
  //       if (n % i === 0) {
  //         console.log(i);
  //       }
  //       printSmallFactors(i + 1);
  //     }
  //     function printLargeFactors(i) {
  //       if (i < 1) return;
  //       if (n % i === 0 && n / i !== i) {
  //         console.log(n / i);
  //       }
  //       printLargeFactors(i - 1);
  //     }
  //     printSmallFactors(1);
  //     printLargeFactors(limit);
  //   }
  //   printFactors(100);
}

// Check whether a number is prime.

// Print all prime numbers up to \(n\).

// Find prime factors of a number.

// Count the divisors of a number.

// Find the sum of the divisors of a number.

// Implement the Sieve of Eratosthenes to find all prime numbers up to \(n\).
