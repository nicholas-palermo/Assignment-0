function setUnionOfAnyAmountOfSets(...args) {
  let arrayOfSets = args; //creates an array of passed arrays
  
  let unionOfSets = new Set();  //creates a new set to store all values passed through original args


  //cycles through each element of each array passed through args and adds it to the union set
  for (var i = 0; i < arrayOfSets.length; i++){
    for (var j = 0; j < arrayOfSets[i].length; j++) {
        unionOfSets.add(arrayOfSets[i][j]);
    }
  }

  //outputs the union sets
  return unionOfSets;
}

// Do not edit this line;
module.exports = setUnionOfAnyAmountOfSets;