function pairSum(nums, target) {
  if (nums.length < 2) {
    throw 'Set of numbers is less than 2!';
  }
  
  var sum;

  for (var i = 0; i < nums.length; i++) {
      if (nums[i] < target) {
        for (var j = i+1; j < nums.length; j++) {
          sum = nums[i] + nums [j];
          if (sum === target) {
            return true;
          }
        }
      }
  }

  return false;


}

// Do not edit this line;
module.exports = pairSum;