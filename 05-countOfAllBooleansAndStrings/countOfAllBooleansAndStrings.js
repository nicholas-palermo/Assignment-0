function countOfAllBooleansAndStrings(arr) {
    
    //Initializes a counter
    var count = 0;
    

    //counts the number of arguments that are of type boolean or string
    for (var i = 0; i < arr.length; i++) {
      if (typeof arr[i] == "boolean") {
        count++
      } else if (typeof arr[i] == "string") {
        count++
      }
    }
    
    //returns the counter
    return count;
}

// Do not edit this line;
module.exports = countOfAllBooleansAndStrings;