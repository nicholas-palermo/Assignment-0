function sumOfMinimumAndMaximum(nums) {
    
    //Initilizes varibles for the minimum and maximum
    let min, max;
    
    //Loops through the nums array to locate the minimum
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] < min || min === undefined) {
            min = nums[i];
        }
    }
   
    //Loops through the nums array to locate the maximum
    for (let j = 0; j < nums.length; j++) {
        if (nums[j] > max || max === undefined) {
            max = nums[j];
        }
    }

    //returns the sum of the minimum and maximum
    return min + max;
}

// Do not edit this line;
module.exports = sumOfMinimumAndMaximum;