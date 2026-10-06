// let prompt = require('prompt-sync')();

// Q - Dynamic array's value insert
{
  // let arr = new Array(10);
  // for (let i = 0; i < arr.length; i++) {
  //   arr[i] = prompt(`Enter ${i} number value: `);
  // }
  // console.log(arr);
}

// Q - Reverse array without extra variable.
{
  // let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  // let i = 0;
  // let j = arr.length - 1;
  // while (i < j) {
  //   [arr[i], arr[j]] = [arr[j], arr[i]];
  //   i++;
  //   j--;
  // }
  // console.log(arr);
}

// Q - Given an array containing only 0s and 1s, write an in-place algorithm to separate all 0s to the left side and all 1s to the right side.
{
  // let arr = [1, 0, 0, 0, 1, 0, 1, 1, 1, 0, 1, 0];
  // let i = 0;
  // let j = 0;
  // while (j < arr.length) {
  //   if (arr[j] === 0) {
  //     [arr[i], arr[j]] = [arr[j], arr[i]];
  //     i++;
  //   }
  //   j++;
  // }
  // console.log(arr);
}

// Q - Organize an array max to min by inbuilt function.
{
  // let arr = [29, 74, 64, 19, 73, 91, 9, 28, 71, 67, 28];
  // arr.sort((a, b) => b - a);
  // console.log(arr);
}

// Q - Left rotation
{
  // let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  // let res = arr[0];
  // for (let i = 1; i < arr.length; i++) {
  //   arr[i - 1] = arr[i];
  // }
  // arr[arr.length - 1] = res;
  // console.log(arr);
}

// Q - Right rotation
{
  // let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  // let res = arr[arr.length - 1];
  // for (let i = arr.length - 1; i > 0; i--) {
  //   arr[i] = arr[i - 1];
  // }
  // arr[0] = res;
  // console.log(arr);
}

// Q - Left rotation by k step.
{
  // let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  // let k = +prompt('Enter the steps: ');
  // if (isNaN(k) || k < 1 || k > arr.length) {
  //   console.log("step should be a number in 1 to array's length");
  // } else {
  //   let copy = arr.splice(0, k);
  //   for (let i = 0; i < arr.length - 1; i++) {
  //     arr[i] = arr[i + 1];
  //   }
  //   arr = [...arr, ...copy];
  //   console.log(arr);
  // }
}
{
  // let arr = Array.from({ length: 100 }, (_, index) => index + 1);
  // let k = +prompt('Enter the steps: ');
  // k = k % arr.length;
  // reverse(0, k - 1);
  // reverse(k, arr.length - 1);
  // reverse(0, arr.length - 1);
  // function reverse(a, b) {
  //   let i = a,
  //     j = b;
  //   while (i < j) {
  //     [arr[j], arr[i]] = [arr[i], arr[j]];
  //     i++;
  //     j--;
  //   }
  // }
  // console.log(arr);
}

// Q - Remove duplicates from the unsorted array.
{
  // let arr = [29, 74, 19, 64, 19, 73, 71, 68, 28, 91, 9, 76, 28, 17, 26, 98, 71, 67, 28];
  // arr.sort((a, b) => a - b);
  // for (let i = 0; i < arr.length; i++) {
  //   for (let j = 0; j < arr.length; j++) {
  //     if (i !== j && arr[i] === arr[j]) arr.splice(arr[i], 1);
  //   }
  // }
  // console.log(arr);
}
{
  // let arr = [29, 74, 19, 64, 19, 73, 73, 74, 71, 68, 28, 91, 9, 76, 28, 17, 26, 98, 71, 67, 28];
  // let uniqueArr = [...new Set(arr)];
  // console.log(uniqueArr);
}

// Q - Remove duplicate eliment from the sorted array.
{
  // let arr = [0, 1, 1, 2, 2, 2, 3, 4, 5, 5, 6, 6, 6, 6, 7, 8, 9, 10, 10];
  // arr.sort((a, b) => a - b);
  // let j = 1;
  // for (let i = 0; i < arr.length - 1; i++) {
  //   if (arr[i] != arr[i + 1]) {
  //     arr[j] = arr[i + 1];
  //     j++;
  //   }
  // }
  // arr.splice(j);
  // console.log(arr, j);
}

// Q - Merge two sorted array with extra array.
{
  // let arr1 = [1, 2, 3, 5, 7, 8, 10, 10];
  // let arr2 = [2, 3, 3, 6, 7, 9];
  // let temp = [];
  // let a1 = 0;
  // let a2 = 0;
  // while (a1 < arr1.length && a2 < arr2.length) {
  //   if (arr1[a1] <= arr2[a2]) {
  //     temp.push(arr1[a1++]);
  //   } else {
  //     temp.push(arr2[a2++]);
  //   }
  // }
  // while (a1 < arr1.length) {
  //   temp.push(arr1[a1++]);
  // }
  // while (a2 < arr2.length) {
  //   temp.push(arr2[a2++]);
  // }
  // console.log(temp);
}

// Q - Merge two sorted array without extra array.
{
  // let nums1 = [1, 2, 3, 0, 0, 0];
  // let nums2 = [2, 5, 6];
  // let m = 2;
  // let n = 2;
  // let k = nums1.length - 1;
  // while (n >= 0) {
  //   if (m >= 0 && nums1[m] > nums2[n]) {
  //     nums1[k] = nums1[m--];
  //   } else {
  //     nums1[k] = nums2[n--];
  //   }
  //   k--;
  // }
  // console.log(nums1);
}

// Q - Best time to buy and sell stocks.
{
  // let prices = [7, 1, 5, 3, 6, 4];
  // let max_profit = 0;
  // let min_price = prices[0];
  // for (let i = 1; i < prices.length; i++) {
  //   if (min_price > prices[i]) {
  //     min_price = prices[i];
  //   } else {
  //     let temp = prices[i] - min_price;
  //     temp > max_profit ? (max_profit = temp) : '';
  //   }
  // }
  // console.log(`Max profit: ${max_profit} \n Min price: ${min_price}`);
}

// Q - Sort the colour.
{
}

// Q - Maximum subarray/kadane's algorithm.
{
}

// Q - Majority element/moore's voting algorithm.
{
}

// Q - Trapping rain water.
{
}
