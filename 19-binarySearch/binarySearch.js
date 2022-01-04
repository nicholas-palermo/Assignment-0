class MySolution {
  constructor() {
    this.flag = false; // this is optional to use;
  }

  binarySearch(nums, target) {
    
    //sets start and end of search
    let start = 0, end = nums.length - 1;

    //while loop based on if start is less than or equal to end
    while (start <= end) {

      //sets midpoint as the average of the ordered set 
      let mid = Math.floor(start + end/2);

      if (nums[mid] === target) {
        return true;  //If target is found in the middle return true
      } else if (target < nums[mid]) {
          end = mid - 1;    //if target is less than middle number, search left side
      } else if (target > nums[mid]) {
          start = mid + 1; //else search right side
      }

    }

    //return false only if target is not found after all loops
    return false;
  }
}

// Do not edit this line;
let StudentSolution = MySolution;
module.exports = StudentSolution;