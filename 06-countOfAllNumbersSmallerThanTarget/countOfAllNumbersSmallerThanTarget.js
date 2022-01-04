function countOfAllNumbersSmallerThanTarget(nums, target) {
  
  //Initializes a counter
  var count = 0;


  /*loops through nums array to count the 
  number of elements that are less than the target*/
  for (var i = 0; i < nums.length; i++) {
    if (nums[i] < target) {
      count++;
    }
  }

  //returns the counter
  return count;
}

// Do not edit this line;
module.exports = countOfAllNumbersSmallerThanTarget;