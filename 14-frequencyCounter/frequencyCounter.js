function frequencyCounter(word) {
    
    //creates an object
    let obj = {};
    
    //loops through word counting frequency of the letters used
    for(let i=0;i < word.length;i++)
    {
      if(obj[word[i]]==undefined) {
        obj[word[i]]=1;
      }
      else {
        obj[word[i]]+=1;
      }
    }
    
    //returns object by value and keys
    return obj;
}

// Do not edit this line;
module.exports = frequencyCounter;