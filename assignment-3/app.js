const express = require("express");
require("./mongoose");
const User = require("./user");
var readlineSync = require("readline-sync");

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

//get all users
app.get("/cosmos",async (req,res)=>{
  try {
    const users = await User.find()
    res.status(200).send({"Result " : users });
  } catch (e) {
    res.status(500).send();
  }
})

var choice = readlineSync.question(
  "Enter choice(1 or 2): 1) Create a new record for Database. 2) Find a Record\n Enter Here : "
);

if (choice === "1") {
  var name = readlineSync.question("Enter name: ");
  var age = readlineSync.question("Enter age: ");
  var email = readlineSync.question("Enter email: ");
  var pass = readlineSync.question("Enter password: ");
  //creating new record for database via comman line input.
  const user = new User({ name: name, age: age, email: email, password: pass });
  try {
    //save user in database.
    user.save();
    console.log("User Added to Database Successfuly.");
    console.log(user);
  } catch (e) {
    console.log(e);
  }
} else if (choice === "2") {
  console.log(
    "You can make a GET request on localhost:3000/cosmos/argument1-argument2\nChange both arguments according to your needs and provide a hyphen in between as shown.\n"
  );
  console.log("To view all the records go to localhost:3000/cosmos\n ");
  app.get("/cosmos/:input", async (req, res) => {
    try {
      //taking input from URL 
      const input = req.params.input;
      const arrinput = input.split("-");
      //Converting the arguments into regex expression for better search results in database.
      const Re1 = new RegExp(arrinput[0], "gi");
      const Re2 = new RegExp(arrinput[1], "gi");
      //finding results for argument1
      const users = await User.find().or([
        { name: Re1 },
        { password: Re1 },
        { email: Re1 },
        { age: arrinput[0] },
      ]);
      //finding results for argument2
      const users2 = await User.find().or([
        { name: Re2 },
        { password: Re2 },
        { email: Re2 },
        { age: arrinput[1] },
      ]);

      const result = [];
      //removing duplicate records from both the arrays and only getting unique records.
      for (i = 0; i < users.length; i++) {
        for (j = 0; j < users2.length; j++) {
          if (users[i]._id.toString() !== users2[j]._id.toString()) {
            result.push(users[i]);
            result.push(users2[j]);
          } else {
            result.push(users[i]);
          }
        }
      }
      const uniqueresult = [...new Set(result)];
      //sending back the unique array
      res.status(200).send({
        // "Result from Argument 1": users,
        // "Result from Argument 2": users2,
        "Result ": uniqueresult,
      });
    } catch (e) {
      res.status(500).send();
    }
  });
} else {
  console.log("Invalid choice");
}

app.listen(port, () => {
  console.log("Server running on port! " + port);
});
