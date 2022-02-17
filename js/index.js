// Given five positive integers
// find the minimum and maximum values that can be calculated by summing exactly four of the five integers
// Print the respective minimum and maximum values as a single line of two space-separated long integers
// console.log(minSumOfFour, maxSumOfFour)

let arr = [3, 1, 5, 6, 2];
// order the array
let orderedArr = arr.sort();
// need to iterate over the array and find the 4 smallest numbers
// maybe eliminate the largest number of the original array
// make a new array of those numbers
// sum all of those numbers in that new array
// iterate over the array and find the 4 largest numbers
// eliminate the smallest number of the original array
// make a new array of those numbers
// sum all of those numbers in that new array

// OR

function miniMaxSum(orderedArr) {
  // then eliminate the final number and the first number...

  let maxArr = orderedArr.slice(1);
  let minArr = orderedArr.slice(0, -1);

  console.log(maxArr, minArr);

  var maxSum = 0;

  for (let i = 0; i < maxArr.length; i++) {
    maxSum += maxArr[i];
  }
  var minSum = 0;
  for (let i = 0; i < minArr.length; i++) {
    minSum += minArr[i];
  }
  console.log(minSum, maxSum);
}
miniMaxSum(arr);
