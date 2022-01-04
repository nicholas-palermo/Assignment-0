function pairSum(nums, target) {

  //Throws an error if array is not at least 2 elements
  if (nums.length < 2) {
    throw 'Set of numbers is less than 2!';
  }
  
  //initilaizes a sum variable
  var sum;

  /*Loops through array one by one, adding current element 
  to other elements to check against the target*/
  for (var i = 0; i < nums.length; i++) {
      if (nums[i] < target) {
        for (var j = i+1; j < nums.length; j++) {
          sum = nums[i] + nums [j];
          if (sum === target) {
            return true;    //returns true if sum is equal to target
          }
        }
      }
  }

  //returns false only if target is not found by any sum of two elements
  return false;


}

// Do not edit this line;
module.exports = pairSum;