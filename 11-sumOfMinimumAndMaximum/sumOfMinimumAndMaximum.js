function sumOfMinimumAndMaximum(nums) {
    
  let min, max;
  

 for (let i = 0; i < nums.length; i++) {
     if (nums[i] < min || min === undefined) {
         min = nums[i];
     }
 }
 
 for (let j = 0; j < nums.length; j++) {
     if (nums[j] > max || max === undefined) {
         max = nums[j];
     }
 }

  console.log (min); console.log(max);

  return min + max;
}

// Do not edit this line;
module.exports = sumOfMinimumAndMaximum;