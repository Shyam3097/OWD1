function plusMinus(arr) {
  // Write your code here
  let pve = 0;
  let nve = 0;
  let ero = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      pve++;
    } else if (arr[i] < 0) {
      nve++;
    } else {
      ero++;
    }
  }
  console.log(Number.parseFloat(pve / arr.length).toFixed(6));
  console.log(Number.parseFloat(nve / arr.length).toFixed(6));
  console.log(Number.parseFloat(ero / arr.length).toFixed(6));
}

let arr = [-4, 3, -9, 0, 4, 1];
plusMinus(arr);
