function countOfAllIndexMatchingNumbers(nums) {
  
  //Initializes a counter
  var count = 0;

  /*loops through the nums array to count the 
  number of elements whose value matches its index*/
  for (var i = 0; i < nums.length; i++) {
    if (nums[i] === i) {
      count++
    }
  }

  return count;
}

// Do not edit this line;
module.exports = countOfAllIndexMatchingNumbers;