function titleCaseEdit(title) {
  const splitTitle = title.split(" ");

  for(var i = 0; i < splitTitle.length; i++) {
    splitTitle[i] = splitTitle[i][0].toUpperCase() + splitTitle[i].substr(1);
  }

  return splitTitle.join(" ");
}


// Do not edit this line;
module.exports = titleCaseEdit;