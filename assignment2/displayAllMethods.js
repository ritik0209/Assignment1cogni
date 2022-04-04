const fs = require("fs");

const displayAllMethods = () => {
  const string = fs.readFileSync("sampletext.txt", function (err, data) {
    if (err) {
      return "Error";
    }
    return data;
  });

  txt = string.toString();

  //exec method
  console.log("EXEC METHOD OUTPUT.......................................\n");
  const myRe = /hermione/gi;
  const result = myRe.exec(txt);
  console.log(result);
  //returns location of hermione in the text

  const myRe2 = /ron/gi;
  const result2 = myRe2.exec(txt);
  console.log(result2);
  //returns location of ron in the text

  //test method
  console.log("TEST METHOD OUTPUT........................................\n");
  const myRe3 = /(dumbledore|harry)/gi;
  const result3 = myRe3.test(txt);
  console.log(result3);
  //returns true if harry or dumbledore exist in the text

  //match - method
  console.log("MATCH METHOD OUTPUT........................................\n");
  const myRe4 = /[0-9]+/gi;
  const result4 = txt.match(myRe4);
  console.log(result4);
  //returns all the numbers from text

  const myRe5 = /\w+\s/gi;
  const result5 = txt.match(myRe5);
  console.log(result5);

  const myRe6 = /[0-9][0-9][0-9]+ books/;
  const result6 = txt.match(myRe6);
  console.log(result6);
  //returns no. of books

  const myRe7 = /"(.*?)"/gi;
  const result7 = txt.match(myRe7);
  console.log(result7);
  //returns all the dialouges of characters i.e text inside double quotes.

  //matchall - method;
  console.log(
    "MATCHALL METHOD OUTPUT........................................\n"
  );
  const myRe9 = /snape[a-z]*/gi;
  const result9 = txt.matchAll(myRe9);
  for (match of result9) {
    console.log(match);
  }
  //finds everytime 'snape' occured in text

  const myRe10 = /Price: [^0-9A-Za-z] ../gi;
  const result10 = txt.matchAll(myRe10);
  console.log(Array.from(result10));
  //finds how much harry owes ron from text

  //search - method;
  console.log("SEARCH METHOD OUTPUT........................................\n");
  const myRe11 = /Dumbledore/gi;
  const result11 = txt.search(myRe11);
  console.log(result11);
  //searches for dumbledore in text

  //replace - method;
  console.log(
    "REPLACE METHOD OUTPUT........................................\n"
  );
  const myRe12 = /Harry/gi;
  const result12 = txt.replace(myRe12, "Harry Potter");
  console.log(result12);
  //replace 'harry' with 'harry potter' in text

  //split - method;
  console.log("SPLIT METHOD OUTPUT........................................\n");
  const myRe13 = /\r\n/gi;
  const result13 = txt.split(myRe13);
  console.log(result13);
  //splits the text.
};

module.exports = {
  displayAllMethods,
};
