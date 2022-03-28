const stopwords = require("stopwords").english;
//const special_characters = ['?','.',',']
// for ( character in special_characters) {
//     sentence = sentence.replace(character, '')
// }

sentenceSegmentation = (sentence) => {
  if (!sentence) {
    return "Please provide a sentence";
  }
  sentence = sentence.split(". ");
  return sentence;
};

wordSegmentation = (sentence) => {
  if (!(sentence)) {
    return "Please provide a sentence";
  }
  sentence = sentence.replace(/[&\/\\#,+.()$~%":*?]/g, "");
  sentence = sentence.replace(/[0-9]/g, "");
  const words = sentence.split(" ");
  return words;
};

removeStopwords = (sentence) => {
  if (!sentence) {
    return "Please provide a sentence";
  }
  result = [];
  sentence = sentence.toLowerCase();
  const words = sentence.split(" ");
  for (i = 0; i < words.length; i++) {
    word_clean = words[i].split(".").join("");
    if (!stopwords.includes(word_clean)) {
      result.push(word_clean);
    }
  }
  return result.join(" ");
};

wordsReverser = (sentence) => {
  if (!sentence) {
    return "Please provide a sentence";
  }
  return sentence.split("").reverse().join("").split(" ").reverse().join(" ");
};

extractNumbers = (sentence) => {
  if (!sentence) {
    return "Please provide a sentence";
  }
  sentence = sentence.split("");
  digits = [];
  for (i = 0; i < sentence.length; i++) {
    if (!isNaN(sentence[i])) {
      digits.push(sentence[i]);
    }
  }
  return digits.join("").split(' ').join('');
};

withoutRepeatedStrings = (sentence) => {
  if (!sentence) {
    return "Please provide a sentence";
  }
  notrepeated = [];
  sentence = sentence.toLowerCase();
  sentence = sentence.replace(/[&\/\\#,+.()$~%":*?<>{}]/g, "");
  sentence = sentence.split(" ");
  for (i = 0; i < sentence.length; i++) {
    if (!notrepeated.includes(sentence[i])) {
      notrepeated.push(sentence[i]);
    }
  }
  return notrepeated.join(" ");
};

// const sentence = sentenceSegmentation("My name is pikachu. He is also thisrty. How are you? I am fine.");
// console.log(sentence);
// const words = wordSegmentation("My name is Pikachu. Pikachu is hungry. is he thisrty?");
// console.log(words);
// const nonstop = removeStopwords("Pikachu is hungry. He is also Thisrty.");
// console.log(nonstop);
// const reverse = wordsReverser("hello hi how are you hello? hi");
// console.log(reverse);
// const numbers = extractNumbers("hello234hi 24hi 999 to yoy 01");
// console.log(numbers);
// const nonrepeated = withoutRepeatedStrings("Hi my name is Pikachu. Is your name Pikachu as well?");
// console.log(nonrepeated);

module.exports = {
  sentenceSegmentation,
  wordSegmentation,
  removeStopwords,
  wordsReverser,
  extractNumbers,
  withoutRepeatedStrings,
};
