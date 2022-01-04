function sumOfAllEvenNumbers(nums) {
  
  //Initializes a counter
  var count = 0;

  //Loops through the nums array to count the number of even terms
  for (var i = 0; i < nums.length; i++) {
    if (nums[i] % 2 === 0) {
      count++;
    }
  }

  //returns the count
  return count;
}

// Do not edit this line;
module.exports = sumOfAllEvenNumbers;