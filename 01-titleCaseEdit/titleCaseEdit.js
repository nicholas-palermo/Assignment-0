function titleCaseEdit(title) {

  //splits string into seperate strings by spaces
  const splitTitle = title.split(" ");

  //captializes the first letter of every word
  for(var i = 0; i < splitTitle.length; i++) {
    splitTitle[i] = splitTitle[i][0].toUpperCase() + splitTitle[i].substr(1);
  }

  return splitTitle.join(" ");
}


// Do not edit this line;
module.exports = titleCaseEdit;