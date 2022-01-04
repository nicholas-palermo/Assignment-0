function sumOfAllOddNumbers(nums) {
    
    //Initializes a counter
    var count = 0;

    //Loops through the nums array to count the number of odd terms;
    for (var i = 0; i < nums.length; i++) {
      if (nums[i] % 2 === 1) {
        count++;
      }
    }

    //returns the counter
    return count;
}

// Do not edit this line;
module.exports = sumOfAllOddNumbers;