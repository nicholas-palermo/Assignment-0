function isPalindrome(word) {

  //splits the word into individual characters 
  var forwards = word.split("");
  
  //initiliazes an array to hold the backwards spelling of word
  var backwards = [];

  //loops through word in reverse to fill backwards array
  for (var i = forwards.length - 1; i >= 0; i--) {
    backwards.push(forwards[i]);
  }

  //joins the arrays together as a word
  forwards = forwards.join("");
  backwards = backwards.join("");

  /*returns true or false dependent on if word 
  is spelled the same backwards and forwards*/
  if (forwards === backwards) {
    return true;
  } else {
    return false;
  }
}

// Do not edit this line;
module.exports = isPalindrome;