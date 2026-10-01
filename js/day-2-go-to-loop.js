// Q - Print n number hello words with for loop.
{
  // let n = +prompt('Enter a number: ');
  // for (let i = 1; i <= n; i++) {
  //   console.log('Hello!');
  // }
}

// Q - Print n number and vice versa with for loop.
{
  // let n = +prompt('Enter a number: ');
  // 1;
  // for (let i = n; i >= 1; i--) {
  //   console.log(i);
  // }
}

// Q - Sum of n numbers with for loop.
{
  // let n = +prompt('Enter a number: ');
  // let sum = 0;
  // for (let i = 1; i <= n; i++) {
  //   sum += i;
  // }
  // console.log(sum);
}

// Q - Factorial of n numbers with for loop.
{
  // let n = +prompt('Enter a number: ');
  // let fac = 1;
  // for (let i = 1; i <= n; i++) {
  //   fac *= i;
  // }
  // console.log(fac);
}

// Q - Get a number from prompt and find prime or not after write the optomized code also.
{
  {
    /*Basic --*/
  }
  // let number = +prompt('Enter a number: ');
  // isPrime = true;

  // for (let i = 2; i < number; i++) {
  //   if (number !== 2 && number % i === 0) {
  //     isPrime = false;
  //   }
  // }

  // console.log(isPrime);

  {
    /*Optomized --*/
  }
  // let number = +prompt('Enter a number: ');
  // isPrime = true;

  // if (number !== 2 && number % 2 == 0) isPrime = false;
  // else {
  //   for (let i = 3; i <= Math.floor(Math.sqrt(number)); i += 2) {
  //     if (number % i === 0) {
  //       isPrime = false;
  //     }
  //   }
  // }

  // console.log(isPrime);
}

// Q - Strong number.
{
  // let n = +prompt('Enter a number: ');
  // if (isNaN(n) || n <= 0) {
  //   console.log('"n" should be a positive number.');
  // } else {
  //   console.log(n);
  //   let copy = n;
  //   let sum = 0;
  //   while (n > 0) {
  //     let fac = 1;
  //     for (let i = 1; i <= n % 10; i++) {
  //       fac *= i;
  //     }
  //     sum += fac;
  //     n = Math.floor(n / 10);
  //   }
  //   if (copy === sum) console.log('Strong number');
  //   else console.log('Not strong number');
  // }
}

// Q - Repeat hello with do-while loop.
{
  // let n = +prompt('Enter a number: ');
  // do {
  //   console.log('Hello');
  //   n++;
  // } while (n <= 10);
}

// Q - Reverse number
{
  // let n = +prompt('Enter a number: ');
  // if (isNaN(n) || n < 1) console.log('Invalid input');
  // else {
  //   let rev = 0;
  //   while (n > 0) {
  //     let rem = n % 10;
  //     rev = rev * 10 + rem;
  //     n = Math.floor(n / 10);
  //   }
  //   console.log(rev);
  // }
}

// Q - Guess the number.
{
  // let n = Math.floor(Math.random() * 100);
  // let guess = 0;
  // let attempt = 0;
  // while (n !== guess) {
  //   guess = +prompt('Guess the number: ');
  //   attempt += 1;
  //   if (n > guess) console.log('Too low');
  //   if (n < guess) console.log('Too high');
  //   if (n === guess) console.log('Congrats');
  //   console.log('Attempt:' + attempt);
  // }
}
