function productOfAnyAmountOfNumbers(...args) {
  
  //Initiailizes sets an array using the numbers passed as args
  let array = args;

  //Initializes the product as the first element in the array
  var product = array[0];

  //Loops through the array and multiplies the factors by the product
  for (var i = 1; i < array.length; i++) {
    product = product * array[i];
  }

  //returns the final product
  return product;
}

// Do not edit this line;
module.exports = productOfAnyAmountOfNumbers;