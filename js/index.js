// Given five positive integers
// find the minimum and maximum values that can be calculated by summing exactly four of the five integers
// Print the respective minimum and maximum values as a single line of two space-separated long integers
// console.log(minSumOfFour, maxSumOfFour)

const arr = [3, 1, 5, 6, 2];
let largest = 0;
let smallest = arr[0];
// need to iterate over the array and find the 4 smallest numbers
// maybe eliminate the largest number of the original array
// make a new array of those numbers
// sum all of those numbers in that new array
// iterate over the array and find the 4 largest numbers
// eliminate the smallest number of the original array
// make a new array of those numbers
// sum all of those numbers in that new array

miniMaxSum(arr);
function miniMaxSum(arr) {
  for (let i = 0; i < 5; i++) {
    // find the largest number
    //   compare 'largest' to the first number in the array
    // if the first number is larger than 'largest' then THAT becomes 'largest
    if (largest < arr[i]) {
      largest = arr[i];
    }
    // find the smallest number
    // compare 'smallest' to the first number in the array
    // if the first number is smaller than 'smallest'
    if (arr[i] < smallest) {
      smallest = arr[i];
    }
  }
  console.log('smallest', smallest);
  console.log('largest', largest);

  //   now need to take 'largest' out of the original array and make a new array
  let newLargeArr = [];
  newLargeArr = arr.slice(largest);
  console.log(newLargeArr);
  //   then add the numbers in the newLargeArray together
//   let newLargeArraySum = newlargeArray[0] + newlargeArray[1] + newlargeArray[2] + newlargeArray[3];
  let initialLargeSum = 0;
  newLargeArr.reduce //but not sure how to write this
console.log()
  //   now need to take 'smallest' out of the original array and make a new array
  let newSmallArr = [];
  newSmallArr = arr.slice(smallest);
  console.log(newSmallArr);

//   then add the numbers in the newSmallArray together
newSmallArr.reduce //but not sure how to write this
// OR
let newSmallArraySum =  function() {
    // newSmallArray[0] + newSmallArray[1] + newSmallArray[2] + newSmallArray[3]
    smallSum = 0;
    for(let i = 0;i < newSmallArray.length; i++) {
        smallSum = smallSum++;
    };

};
console.log(smallSum);
