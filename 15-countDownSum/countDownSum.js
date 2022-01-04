class MySolution {
  countDownSum(num) {
    
      var sum = 0;
      
      for (var i = num; i >= 1; i--) {
          sum = sum + i;
      }
      
      return sum
  }
    
}

// Do not edit this line;
let StudentSolution = MySolution;
module.exports = StudentSolution;