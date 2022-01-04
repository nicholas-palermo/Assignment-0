function productOfAnyAmountOfNumbers(...args) {
  let array = args;
  var product = array[0];

  for (var i = 1; i < array.length; i++) {
    product = product * array[i];
  }

  return product;
}

// Do not edit this line;
module.exports = productOfAnyAmountOfNumbers;