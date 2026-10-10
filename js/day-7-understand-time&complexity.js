/*

```
         TIME COMPLEXITY — JAVASCRIPT DSA
```

=========================================================

Time complexity describes how an algorithm's work grows
as the input size (n) increases.

Big O focuses on the growth rate, not the exact execution
time in seconds.

Complexities covered:

1. O(1)     - Constant
2. O(log n) - Logarithmic
3. O(n)     - Linear
4. O(n log n) - Linearithmic
5. O(n^2)   - Quadratic
6. O(2^n)   - Exponential
7. O(n!)    - Factorial

=========================================================

1. O(1) — CONSTANT TIME COMPLEXITY
   =========================================================

Meaning:
The number of operations stays bounded independently
of the input size.

When is it useful?

* Accessing an array element by index.
* Performing a fixed number of calculations.
* Getting an answer directly using a formula.

Example 1: Direct calculation

*/

{
  // let n = 10000000;
  // // The formula calculates the sum without a loop.
  // let sum = (n * (n + 1)) / 2;
  // console.log(sum);
}

/*
Why O(1)?
The number of arithmetic operations does not grow with n.

Example 2: Array index access

*/

{
  //   let arr = [10, 20, 30, 40, 50];
  //
  //   console.log(arr[2]); // 30
}

/*
Why O(1)?
Accessing an element at a known array index takes constant
time in JavaScript arrays under the usual DSA model.

Important:
A loop with a fixed, input-independent number of iterations
can be O(1).

But if the number of iterations depends on n, analyze how
the work grows as n changes.

=========================================================
2. O(log n) — LOGARITHMIC TIME COMPLEXITY
=========================================

Meaning:
The problem size is repeatedly divided by a constant factor,
often by 2.

When is it useful?

* Binary search on sorted arrays.
* Searching in balanced binary search trees.
* Algorithms that repeatedly halve a search space.

Example 1: Repeatedly divide n by 2

*/

{
  //   let n = 64;
  //   let count = 0;
  //
  //   while (n > 1) {
  //     n = n / 2;
  //     count++;
  //   }
  //
  //   console.log(count); // 6
}

/*
The values are:
64 -> 32 -> 16 -> 8 -> 4 -> 2 -> 1

The number of iterations grows logarithmically.

Example 2: Binary search

Binary search requires a sorted array.
Each comparison eliminates approximately half the remaining
search space.

*/

{
  // let arr = [2, 5, 8, 12, 16, 23, 38, 56];
  // let target = 23;

  // let left = 0;
  // let right = arr.length - 1;
  // let found = -1;

  // while (left <= right) {
  //   let mid = Math.floor((left + right) / 2);

  //   if (arr[mid] === target) {
  //     found = mid;
  //     break;
  //   } else if (arr[mid] < target) {
  //     left = mid + 1;
  //   } else {
  //     right = mid - 1;
  //   }
  // }

  console.log(found); // 5
}

/*
Why O(log n)?
The search space becomes approximately half its previous
size after each iteration.

If the array has 64 elements, binary search needs at most
about 7 comparisons in the worst case.

Important:
Sorting an unsorted array first has an additional cost.

=========================================================
3. O(n) — LINEAR TIME COMPLEXITY
================================

Meaning:
The work grows proportionally with the input size.

When is it useful?

* Traversing an array.
* Finding the minimum or maximum.
* Linear search.
* Calculating a sum.
* Kadane's algorithm and Moore's Voting algorithm.

Example 1: Count loop iterations

*/

{
  // let n = 100;
  // let count = 0;
  // for (let i = 1; i <= n; i++) {
  //   count++;
  // }
  // console.log(count); // 100
}

/*
If n doubles, the number of iterations also doubles.

Example 2: Find the maximum without Math.max()

*/

{
  // let arr = [12, 5, 38, 21, 9];
  // let max = arr[0];
  // for (let i = 1; i < arr.length; i++) {
  //   if (arr[i] > max) {
  //     max = arr[i];
  //   }
  // }
  // console.log(max); // 38
}

/*
Why O(n)?
In the worst case, the algorithm examines every element.

For an array of n elements, it performs a linear number
of comparisons.

For problems requiring inspection of every element,
O(n) is often an efficient solution.

=========================================================
4. O(n log n) — LINEARITHMIC TIME COMPLEXITY
============================================

Meaning:
The work grows proportionally to n multiplied by log n.

When is it useful?

* Merge sort.
* Average-case quicksort.
* Efficient sorting and divide-and-conquer algorithms.

Example: One linear loop and one logarithmic loop

*/

{
  //   let n = 8;
  //   let count = 0;
  //
  //   for (let i = 0; i < n; i++) {
  //     for (let j = 1; j < n; j *= 2) {
  //       count++;
  //     }
  //   }
  //
  //   console.log(count); // 32
}

/*
Why O(n log n)?

Outer loop:
Runs n times.

Inner loop:
j doubles: 1 -> 2 -> 4.

Its number of iterations grows as log n.

Total:
O(n) * O(log n) = O(n log n).

This is not the implementation of merge sort; it is a
simple example demonstrating the growth rate.

Why is it useful?
For large datasets, O(n log n) is generally much more
scalable than O(n^2).

=========================================================
5. O(n^2) — QUADRATIC TIME COMPLEXITY
=====================================

Meaning:
The work grows proportionally to n squared.

When is it useful?

* Comparing every pair of elements.
* Simple sorting algorithms.
* Problems involving all pairs of array elements.

Example 1: Two nested loops

*/

{
  //   let n = 100;
  //   let count = 0;
  //
  //   for (let i = 1; i <= n; i++) {
  //     for (let j = 1; j <= n; j++) {
  //       count++;
  //     }
  //   }
  //
  //   console.log(count); // 10000
}

/*
Why O(n^2)?

Outer loop: n iterations.
Inner loop: n iterations for each outer iteration.

Total operations:
n * n = n^2.

If n = 100, the inner statement runs 10,000 times.
If n = 200, it runs 40,000 times.

Doubling n approximately quadruples the work.

Example 2: Print every pair

*/

{
  //   let arr = [1, 2, 3, 4];
  //
  //   for (let i = 0; i < arr.length; i++) {
  //     for (let j = 0; j < arr.length; j++) {
  //       console.log(arr[i], arr[j]);
  //     }
  //   }
}

/*
Why O(n^2)?
Every element is paired with every element.

Can it be improved?
Sometimes. If the problem allows sorting, hashing, or a
two-pointer approach, a more efficient solution may exist.

For small inputs, O(n^2) can still be perfectly acceptable.

=========================================================
6. O(2^n) — EXPONENTIAL TIME COMPLEXITY
=======================================

Meaning:
The work grows exponentially as n increases.

When does it appear?

* Exploring subsets.
* Trying every combination of choices.
* Recursive algorithms with branching and repeated work.

Example: Naive recursive Fibonacci

*/

{
  //   function fibonacci(n) {
  //     if (n <= 1) {
  //       return n;
  //     }
  //
  //     return fibonacci(n - 1) + fibonacci(n - 2);
  //   }
  //
  //   console.log(fibonacci(6)); // 8
}

/*
Why is it exponential?

The function repeatedly calculates the same Fibonacci
values through different recursive calls.

This implementation has exponential time complexity.
O(2^n) is a common upper bound; a tighter asymptotic
bound is O(phi^n), where phi is the golden ratio.

How can it be improved?

Use memoization or dynamic programming to avoid repeated
calculations.

For example, an iterative Fibonacci implementation can
calculate the result in O(n) time and O(1) extra space.

=========================================================
7. O(n!) — FACTORIAL TIME COMPLEXITY
====================================

Meaning:
The work grows with the factorial of n.

n! = n * (n - 1) * (n - 2) * ... * 1

When does it appear?

* Generating every permutation.
* Brute-force search over every possible ordering.
* Some exhaustive combinatorial problems.

Example: Generate every permutation

*/

{
  //   function permutations(arr, start) {
  //     if (start === arr.length) {
  //       console.log(arr.join(""));
  //       return;
  //     }
  //
  //     for (let i = start; i < arr.length; i++) {
  //       // Choose an element for the current position.
  //       [arr[start], arr[i]] = [arr[i], arr[start]];
  //
  //       // Generate permutations of the remaining positions.
  //       permutations(arr, start + 1);
  //
  //       // Restore the array for the next choice.
  //       [arr[start], arr[i]] = [arr[i], arr[start]];
  //     }
  //   }
  //
  //   permutations(["A", "B", "C"], 0);
}

/*
For three distinct elements, there are 3! = 6 permutations.

3!  = 6
5!  = 120
10! = 3,628,800

Why O(n!)?
There are n! possible permutations, and printing every
permutation requires at least factorial-scale output work
when output size is counted.

Can it be improved?
Only if the problem allows avoiding some permutations or
using a more efficient strategy. If every permutation must
be produced, factorial-scale output is unavoidable.

=========================================================
BIG O COMPARISON
================

O(1)       Constant       Excellent scalability
O(log n)   Logarithmic    Excellent scalability
O(n)       Linear         Usually scales well
O(n log n) Linearithmic   Good for many large-input tasks
O(n^2)     Quadratic      Often slow for large inputs
O(2^n)     Exponential    Poor for large inputs
O(n!)      Factorial      Extremely poor for large inputs

For the same task and comparable conditions, a lower growth
rate is generally preferable.

However, the best algorithm also depends on:

* Whether the problem permits a faster approach.
* Extra memory requirements.
* Constant factors and implementation details.
* Whether every possible result must be produced.

=========================================================
IMPORTANT RULES
===============

Rule 1: Big O describes growth as the input size changes.

A loop that runs n times is O(n), even if you happen to
test it with n = 100.

A fixed number of operations independent of n is O(1).

Rule 2: Count total work, not just the number of loops.

One loop over n elements:
Usually O(n).

Two nested loops, each running n times:
Usually O(n^2).

A loop that doubles or halves a counter each iteration:
Usually O(log n).

An outer loop running n times and an inner loop running
logarithmically:
O(n log n).

These are common patterns, not universal rules. Always
inspect the loop bounds and the work performed per iteration.

=========================================================
PRACTICE — PREDICT BEFORE RUNNING
=================================

Question:
What is the time complexity of this code?

*/

{
  //   let n = 64;
  //
  //   for (let i = 1; i <= n; i *= 2) {
  //     console.log(i);
  //   }
}

/*
Hint:
The values of i are 1, 2, 4, 8, 16, 32, and 64.

The counter doubles each iteration, so the time complexity
is O(log n).

Try changing n to 128 and count the iterations again.
*/
