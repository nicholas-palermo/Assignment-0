function fizzBuzz(start, end) {
  var nums = [];

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

  return nums;

}

// Do not edit this line;
module.exports = fizzBuzz;