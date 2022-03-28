const stopwords = require("stopwords").english;
const express = require("express");
const bodyParser = require("body-parser");
const nlp = require("./nlp-functions");
const path = require("path");
const port = process.env.PORT || 3000;

const app = express();

app.use(express.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

app.get("", (req, res) => {
  res.sendFile(path.join(__dirname, "/index.html"));
});

app.post("/nlp", (req, res) => {
  // if(!req.body.sentence){
  //   res.status(400).send({"Error" : "Please provide a sentence!"})
  // }
  const sentence = req.body.sentence;
  const sentenceSegment = nlp.sentenceSegmentation(sentence);
  const wordsSegment = nlp.wordSegmentation(sentence);
  const nonstop = nlp.removeStopwords(sentence);
  const nonrepeated = nlp.withoutRepeatedStrings(sentence);
  const reverse = nlp.wordsReverser(sentence);
  const numbers = nlp.extractNumbers(sentence);
  res.send({
    "Sentence Segmentation": sentenceSegment,
    "Word Segmentation": wordsSegment,
    "String Without Stopwords": nonstop,
    "String Without Duplicate Words": nonrepeated,
    "Reversed String": reverse,
    "Numbers from String": numbers,
  });
});

app.listen(port, () => {
  console.log("Server is running on port "+ port);
});
