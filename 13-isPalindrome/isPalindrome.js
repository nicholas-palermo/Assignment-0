function isPalindrome(word) {
  var forwards = word.split();
  var backwards = [];

  for (var i = 0; i < forwards.length; i++) {
    backwards.push(forwards[i]);
  }

  forwards = forwards.join("");
  backwards = backwards.join("");

  if (forwards === backwards) {
    return true;
  } else {
    return false;
  }
}

// Do not edit this line;
module.exports = isPalindrome;