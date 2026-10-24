// Quick Sort - p = pivot, f = first, l = last
{
  // function quickSort(arr, first, last) {
  //   if (first >= last) return;
  //   let pivot = first;
  //   let left = first + 1;
  //   let right = last;
  //   while (left <= right) {
  //     while (left <= last && arr[left] < arr[pivot]) {
  //       left++;
  //     }
  //     while (right > first && arr[right] > arr[pivot]) {
  //       right--;
  //     }
  //     if (left < right) {
  //       swap(arr, left, right);
  //       left++;
  //       right--;
  //     }
  //   }
  //   swap(arr, pivot, right);
  //   quickSort(arr, first, right - 1);
  //   quickSort(arr, right + 1, last);
  // }
  // function swap(arr, a, b) {
  //   [arr[a], arr[b]] = [arr[b], arr[a]];
  // }
  // let arr = [8, 2, 1, 5, 6, 4, 9];
  // quickSort(arr, 0, arr.length - 1);
  // console.log(arr);
}
