function countOfAllBooleans(arr) {
  
  //initializes a counter
  var count = 0;
  
  //counts the number of arguments that are of type boolean
  for (var i = 0; i < arr.length; i++) {
    if (typeof arr[i] == "boolean") {
      count++
    } 
  }
  
  //returns the counter
  return count;

}

// Do not edit this line;
module.exports = countOfAllBooleans;