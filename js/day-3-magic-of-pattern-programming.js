let prompt = require('prompt-sync')();

// Q - Print '*' n times in a single row.

{
  // let n = prompt('Enter a number: ');
  // for (let i = 1; i <= n; i++) {
  //   process.stdout.write('* ');
  // }
}

// Optimized Solution

{
  // let n = prompt('Enter a number: ');
  // process.stdout.write('* '.repeat(n));
}

// Q - Print a dynamic square pattern of '*' with n rows and n columns.

// Example:
// * * * * *
// * * * * *
// * * * * *
// * * * * *
// * * * * *

{
  // let n = prompt('Enter a number: ');
  // for (let i = 1; i <= n; i++) {
  //   for (let j = 1; j <= n; j++) {
  //     process.stdout.write('* ');
  //   }
  //   console.log();
  // }
}

// Optimized Solution

{
  // let n = prompt('Enter a number: ');
  // let row = '* '.repeat(n);
  // for (let i = 1; i <= n; i++) {
  //   console.log(row);
  // }
}

// Q - Print a dynamic right-angled triangle pattern of '*'.

// Example:
// *
// * *
// * * *
// * * * *
// * * * * *

{
  // let n = prompt('Enter a number: ');
  // for (let i = 1; i <= n; i++) {
  //   for (let j = 1; j <= i; j++) {
  //     process.stdout.write('* ');
  //   }
  //   console.log();
  // }
}

// Optimized Solution

{
  // let n = prompt('Enter a number: ');
  // for (let i = 1; i <= n; i++) {
  //   console.log('* '.repeat(i));
  // }
}

// Q - Print a dynamic inverted right-angled triangle pattern of '*'.

// Example:
// * * * * *
// * * * *
// * * *
// * *
// *

{
  // let n = prompt('Enter a number: ');
  // for (let i = 1; i <= n; i++) {
  //   for (let j = 5; j >= i; j--) {
  //     process.stdout.write('* ');
  //   }
  //   console.log();
  // }
}

// Optimized Solution

{
  // let n = prompt('Enter a number: ');
  // for (let i = n; i >= 1; i--) {
  //   console.log('* '.repeat(i));
  // }
}

// Q - Print a dynamic number triangle using consecutive numbers.

// Example:
// 1
// 2 3
// 4 5 6
// 7 8 9 10
// 11 12 13 14 15

{
  // let n = prompt('Enter a number: ');
  // let value = 0;
  // for (let i = 1; i <= n; i++) {
  //   for (let j = 1; j <= i; j++) {
  //     process.stdout.write(++value + ' ');
  //   }
  //   console.log();
  // }
}

// Optimized Solution

{
  // let n = prompt('Enter a number: ');
  // let value = 1;
  // for (let i = 1; i <= n; i++) {
  //   let row = '';
  //   for (let j = 1; j <= i; j++) {
  //     row += value++ + ' ';
  //   }
  //   console.log(row);
  // }
}

// Q - Print a dynamic number triangle where each row starts from 1.

// Example:
// 1
// 1 2
// 1 2 3
// 1 2 3 4
// 1 2 3 4 5

{
  // let n = prompt('Enter a number: ');
  // for (let i = 1; i <= n; i++) {
  //   let value = 0;
  //   for (let j = 1; j <= i; j++) {
  //     process.stdout.write(++value + ' ');
  //   }
  //   console.log();
  // }
}

// Optimized Solution

{
  // let n = prompt('Enter a number: ');
  // for (let i = 1; i <= n; i++) {
  //   console.log(
  //     Array.from({ length: i }, (_, index) => index + 1).join(' ')
  //   );
  // }
}

// Q - Print a right-aligned triangle pattern of '*'.

// Example:
//         *
//       * *
//     * * *
//   * * * *
// * * * * *

{
  // let n = prompt('Enter a number: ');
  // for (let i = 1; i <= n; i++) {
  //   for (let s = 1; s <= n - i; s++) {
  //     process.stdout.write('  ');
  //   }
  //   for (let j = 1; j <= i; j++) {
  //     process.stdout.write('* ');
  //   }
  //   console.log();
  // }
}

// Optimized Solution

{
  // let n = prompt('Enter a number: ');
  // for (let i = 1; i <= n; i++) {
  //   console.log('  '.repeat(n - i) + '* '.repeat(i));
  // }
}

// Q - Print a right-aligned triangle pattern of '*' with single-space indentation.

// Example:
//     *
//    * *
//   * * *
//  * * * *
// * * * * *

{
  // let n = prompt('Enter a number: ');
  // for (let i = 1; i <= n; i++) {
  //   for (let s = 1; s <= n - i; s++) {
  //     process.stdout.write(' ');
  //   }
  //   for (let j = 1; j <= i; j++) {
  //     process.stdout.write('* ');
  //   }
  //   console.log();
  // }
}

// Optimized Solution

{
  // let n = prompt('Enter a number: ');
  // for (let i = 1; i <= n; i++) {
  //   console.log(' '.repeat(n - i) + '* '.repeat(i));
  // }
}

// Q - Print a right-aligned triangle using consecutive alphabet characters.

// Example:
//     A
//    A B
//   A B C
//  A B C D
// A B C D E

{
  // let n = prompt('Enter a number: ');
  // for (let i = 1; i <= n; i++) {
  //   let char = 65;
  //   for (let s = 1; s <= n - i; s++) {
  //     process.stdout.write(' ');
  //   }
  //   for (let j = 1; j <= i; j++) {
  //     process.stdout.write(String.fromCharCode(char) + ' ');
  //     char++;
  //   }
  //   console.log();
  // }
}

// Optimized Solution

{
  // let n = prompt('Enter a number: ');
  // for (let i = 1; i <= n; i++) {
  //   let row = ' '.repeat(n - i);
  //   for (let j = 0; j < i; j++) {
  //     row += String.fromCharCode(65 + j) + ' ';
  //   }
  //   console.log(row);
  // }
}

// Q - Print a right-aligned triangle using consecutive alphabet characters across all rows.

// Example:
//         A
//       B C
//     D E F
//   G H I J
// K L M N O

{
  // let n = prompt('Enter a number: ');
  // let char = 65;
  // for (let i = 1; i <= n; i++) {
  //   for (let s = 1; s <= n - i; s++) {
  //     process.stdout.write('  ');
  //   }
  //   for (let j = 1; j <= i; j++) {
  //     process.stdout.write(String.fromCharCode(char) + ' ');
  //     char++;
  //   }
  //   console.log();
  // }
}

// Optimized Solution

{
  // let n = prompt('Enter a number: ');
  // let char = 65;
  // for (let i = 1; i <= n; i++) {
  //   let row = '  '.repeat(n - i);
  //   for (let j = 1; j <= i; j++) {
  //     row += String.fromCharCode(char++) + ' ';
  //   }
  //   console.log(row);
  // }
}

// Q - Print an X-shaped pattern using '*'.

// Example:
// *       *
//   *   *
//     *
//   *   *
// *       *

{
  // let n = prompt('Enter a number: ');
  // for (let i = 1; i <= n; i++) {
  //   for (let j = 1; j <= n; j++) {
  //     if (i === j || j === n - i + 1) {
  //       process.stdout.write('* ');
  //     } else {
  //       process.stdout.write('  ');
  //     }
  //   }
  //   console.log();
  // }
}

// Optimized Solution

{
  // let n = prompt('Enter a number: ');
  // for (let i = 1; i <= n; i++) {
  //   let row = '';
  //   for (let j = 1; j <= n; j++) {
  //     row += i === j || j === n - i + 1 ? '* ' : '  ';
  //   }
  //   console.log(row);
  // }
}

// Q - Print an X-shaped pattern using consecutive numbers.

// Example:
// 1       2
//   3   4
//     5
//   6   7
// 8       9

{
  // let n = prompt('Enter a number: ');
  // let value = 1;
  // for (let i = 1; i <= n; i++) {
  //   for (let j = 1; j <= n; j++) {
  //     if (i === j || j === n - i + 1) {
  //       process.stdout.write(value++ + ' ');
  //     } else {
  //       process.stdout.write('  ');
  //     }
  //   }
  //   console.log();
  // }
}

// Optimized Solution

{
  // let n = prompt('Enter a number: ');
  // let value = 1;
  // for (let i = 1; i <= n; i++) {
  //   let row = '';
  //   for (let j = 1; j <= n; j++) {
  //     if (i === j || j === n - i + 1) {
  //       row += value++ + ' ';
  //     } else {
  //       row += '  ';
  //     }
  //   }
  //   console.log(row);
  // }
}

// Q - Print a diagonal pattern of '*' that forms a decreasing X shape.

// Example:
// *       *
//  *     *
//   *   *
//    * *
//     *

{
  // let n = prompt('Enter a number: ');
  // for (let i = 1; i <= n; i++) {
  //   for (let j = 1; j < n * 2; j++) {
  //     if (i === j || j === n * 2 - i) {
  //       process.stdout.write('*');
  //     } else {
  //       process.stdout.write(' ');
  //     }
  //   }
  //   console.log();
  // }
}

// Optimized Solution

{
  // let n = prompt('Enter a number: ');
  // for (let i = 1; i <= n; i++) {
  //   let row = '';
  //   for (let j = 1; j < n * 2; j++) {
  //     row += i === j || j === n * 2 - i ? '*' : ' ';
  //   }
  //   console.log(row);
  // }
}
