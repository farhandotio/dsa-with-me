// Q - Given a sorted array and a target value, find the index of the target using Binary Search. Also count how many steps the search takes.
{
  // let arr = [34, 42, 53, 93, 9305];
  // let i = 0,
  //   j = arr.length - 1,
  //   target = 93,
  //   step = 0;
  // while (i <= j) {
  //   step++;
  //   let mid = Math.floor((i + j) / 2);
  //   if (target === arr[mid]) {
  //     console.log('Target found at : ' + mid + ' index' + '; Step: ' + step);
  //     break;
  //   } else if (target < arr[mid]) {
  //     j = mid - 1;
  //   } else if (target > arr[mid]) {
  //     i = mid + 1;
  //   }
  // }
}

// Optimized - LeetCode Version
{
  // let nums = [34, 42, 53, 93, 9305];
  // var search = function (nums, target, first = 0, last = nums.length - 1) {
  //   if (first > last) return -1;
  //   let mid = Math.floor((first + last) / 2);
  //   if (target === nums[mid]) {
  //     return mid;
  //   } else if (target > nums[mid]) {
  //     return search(nums, target, mid + 1, last);
  //   } else {
  //     return search(nums, target, first, mid - 1);
  //   }
  // };
}
