var readlineSync = require("readline-sync");
const object_upload = require("./upload");
const object_verify = require("./verify");
const object_storage = require("./create_storage");
const object_container = require("./create_container");
const object_cognitive = require("./cognitive_check");
const object_imgupload = require("./upload_image");
const object_list = require("./list");
const util = require("util");
const exec = util.promisify(require("child_process").exec);
const path = require("path");
const fs = require("fs");

var input_number = readlineSync.question(
  "Choose option:\n 1)Verify storage account name\n 2)Create storage account\n 3)Create container\n 4)Upload image\n 5)Check for adult Content \n 6)Upload text file\n 7)List Files\n"
);

if (input_number == 1) {
  var input = readlineSync.question(
    "Enter name for storage account to verify if it exists : "
  );
  object_verify.verify(input);
} else if (input_number == 2) {
  var input = readlineSync.question("Enter name for storage account: ");
  object_storage.create_storage(input);
} else if (input_number == 3) {
  var input = readlineSync.question(
    "Enter name for storage account in which you want your container(data) to be created: "
  );
  object_container.create_container(input);
} else if (input_number == 6) {
  var input = readlineSync.question("Enter text that goes inside the file: ");
  object_upload
    .main(input)
    .then(() => console.log("Done"))
    .catch((ex) => console.log(ex.message));
} else if (input_number == 5) {
  var input = readlineSync.question("Enter Image url: \n");
  object_cognitive.cognitive(input, (error, value) => {
    if (error) {
      console.log(error);
    } else {
      console.log(value);
    }
  });
} else if (input_number == 4) {
  var storage = readlineSync.question("Enter storage account name : ");
  var cont = readlineSync.question("Enter container name : ");
  var filepath = readlineSync.question("Enter image url : ");
  var fname = readlineSync.question("Enter file name:  ");
  object_imgupload.upload_image(storage, cont, filepath, fname);
} else if (input_number == 7) {
  var storage = readlineSync.question("Enter storage account name : ");
  var cont = readlineSync.question("Enter container name : ");
  console.log("Listing files... please wait.");
  object_list.list_files(storage, cont);
} else {
  console.log("Invalid option!");
}
