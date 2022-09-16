function miniMaxSum(arr) {
  // Write your code here
  let l = 10 ** 10;
  let h = 0;
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < l) {
      l = arr[i];
    }
    if (arr[i] > h) {
      h = arr[i];
    }
    sum += arr[i];
  }
  console.log(sum - h, sum - l);
}

let arr = [1, 3, 5, 7, 9];
miniMaxSum(arr);
