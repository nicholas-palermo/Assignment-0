function fizzBuzz(start, end) {

  //Initializes an array called nums
  var nums = [];

  /*Loop, from passed arguments, start, to end, determines its 
  divisability in reference to 3 and 5 and fills the array as such*/
  for (var i = start; i <= end; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      nums.push("FizzBuzz");
    } else if (i % 3 === 0) {
      nums.push("Fizz");
    } else if (i % 5 === 0) {
      nums.push("Buzz");
    } else {
      nums.push(i)
    }
  }

  //returns the array, nums
  return nums;

}

// Do not edit this line;
module.exports = fizzBuzz;