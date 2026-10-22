// Recursive divide-and-conquer sorting algorithm
{
  // function conquer(arr, first, mid, last) {
  //   let temp = new Array(last - first + 1);
  //   let i = first,
  //     j = mid + 1,
  //     k = 0;
  //   while (i <= mid && j <= last) {
  //     if (arr[i] < arr[j]) temp[k++] = arr[i++];
  //     else temp[k++] = arr[j++];
  //   }
  //   while (i <= mid) temp[k++] = arr[i++];
  //   while (j <= last) temp[k++] = arr[j++];
  //   let p = 0,
  //     t = first;
  //   while (p < temp.length) {
  //     arr[t++] = temp[p++];
  //   }
  // }
  // function devide(arr, first, last) {
  //   if (first >= last) return;
  //   let mid = parseInt((last + first) / 2);
  //   devide(arr, first, mid);
  //   devide(arr, mid + 1, last);
  //   conquer(arr, first, mid, last);
  // }
  // let arr = [0, 6, 2, 3, 7, 5, 1, 4, 0, 6, 1, 4];
  // devide(arr, 0, arr.length - 1);
  // console.log(arr);
}
