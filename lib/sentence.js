'use strict';

const countSentences = function(sentences)
{
  // Add code here...
  var count=0;
  for (var i=0;i<sentences.length;i++)
  {
      if(sentences[i]=="." || sentences[i]=="?" || sentences[i]=="!")
      {
        count++;
      }
  }
  return count;
  
};

module.exports = countSentences;

console.log(countSentences("Hi! My name is Liman. I'm 23 years old."))
console.log(countSentences("Lorem ipsum dolor sit amet. Id varius risus magna at dui."))
console.log(countSentences(""))
