const fs = require("fs");
const re = require("./regex-functions");
var readlineSync = require("readline-sync");
var methods = require("./displayAllMethods");

// .................................................ALL METHODS...................................................................
//exec - method
// const myRe = /hermione/g
// const result = myRe.exec(txt);
// console.log(result);

// const myRe = /ron/i
// const result = myRe.exec(txt);
// console.log(result);

//test - method
// const myRe = /(dumbledore|harry)/i
// const result = myRe.test(txt)
// console.log(result);

//match - method
// const myRe = /[0-9]+/g
// const result = txt.match(myRe)
// console.log(result);

// const myRe = /\w+\s/g;
// const result = txt.match(myRe)
// console.log(result);

// const myRe = /[0-9][0-9][0-9]+ books/
// const result = txt.match(myRe)
// console.log(result);

// const myRe = /"(.*?)"/g
// const result = txt.match(myRe)
// console.log(result);

//matchall - method
// const myRe = /snape[a-z]*/gi;
// const result = txt.matchAll(myRe);
// for (match of result) {
//   console.log(match);
// }

// const myRe = /Price: [^0-9A-Za-z] ../g
// const result = txt.matchAll(myRe)
// console.log(Array.from(result));

//search - method
// const myRe = /Dumbledore/g
// const result = txt.search(myRe)
// console.log(result);

//replace - method
// const myRe = /Harry/g
// const result = txt.replace(myRe, 'Harry Potter')
// console.log(result);

//split - method
// const myRe = /\r\n/g
// const result = txt.split(myRe)
// console.log(result);

// const myRe = new RegExp(process.argv[2], "gi");
// console.log("My Regular Expression is " + myRe);

var choice = readlineSync.question(
  "Press 1 to display all methods at once \nPress 2 to enter custom regex pattern \n"
);
if (choice === "1") {
  methods.displayAllMethods();
} else {
  console.log(
    "Note : Type the regex pattern only - Your pattern will automatically be converted to a regular expression literal"
  );
  var Pattern = readlineSync.question("Enter your pattern here: \n");
  const myRe = new RegExp(Pattern, "gi");
  console.log("Your Regular Expression is " + myRe + "\n");

  var Method = readlineSync.question(
    "Which method you want to apply ?  \n1)match\n2)matchall\n3)search\n4)replace\n5)split\n6)exec\n7)test\nType method name here: "
  );

  const string = fs.readFileSync("sampletext.txt", function (err, data) {
    if (err) {
      return "Error";
    }
    return data;
  });

  txt = string.toString();

  if (Method === "match") {
    re.Match(txt, myRe, (err, data) => {
      if (err) {
        console.log(err);
      }
      console.log(data);
    });
  } else if (Method === "split") {
    re.Split(txt, myRe, (err, data) => {
      if (err) {
        console.log(err);
      }
      console.log(data);
    });
  } else if (Method === "test") {
    re.Test(txt, myRe, (err, data) => {
      if (err) {
        console.log(err);
      }
      console.log(data);
    });
  } else if (Method === "matchall") {
    re.MatchAll(txt, myRe, (err, data) => {
      if (err) {
        console.log(err);
      }
      console.log(data);
    });
  } else if (Method === "search") {
    re.Search(txt, myRe, (err, data) => {
      if (err) {
        console.log(err);
      }
      console.log(data);
    });
  } else if (Method === "replace") {
    var element_to_replace = readlineSync.question(
      "Enter the element you want your expression to be replaced with : "
    );
    re.Replace(txt, myRe, element_to_replace, (err, data) => {
      if (err) {
        console.log(err);
      }
      console.log(data);
    });
  } else if (Method === "exec") {
    re.Exec(txt, myRe, (err, data) => {
      if (err) {
        console.log(err);
      }
      console.log(data);
    });
  } else {
    console.log("Invalid Method");
  }
}
