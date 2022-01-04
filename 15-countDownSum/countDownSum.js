class MySolution {
  countDownSum(num) {
    
      //initilaizes and sets sum to 0
      var sum = 0;
      
      //loops by conuting down from the number passed
      for (var i = num; i >= 1; i--) {
          sum = sum + i;
      }
      
      //returns the sum of the numbers found in loop
      return sum
  }
    
}

// Do not edit this line;
let StudentSolution = MySolution;
module.exports = StudentSolution;