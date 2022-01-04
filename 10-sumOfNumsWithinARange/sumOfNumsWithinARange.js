function sumOfNumsWithinARange(nums, start, end) {
  
  //Initializes a counter
  var count = 0;

  //loops throught the nums array and counts the numbers within passed range
  for (var i = 0; i < nums.length; i++) {
      if (nums[i] >= start && nums[i] <= end) {
        count++;
      }
    }
  
    //returns the counter
    return count;
}

// Do not edit this line;
module.exports = sumOfNumsWithinARange;