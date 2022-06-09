const object_cognitive = require("./cognitive_check");
const object_downloadimg = require("./download.js");
const util = require("util");
const exec = util.promisify(require("child_process").exec);
const path = require("path");
const fs = require("fs");


const upload_image = (storage, cont, filepath, fname) => {
  if (
    path.extname(filepath) === ".png" ||
    path.extname(filepath) === ".jpg" ||
    path.extname(filepath) === ".jpeg"
  ) {
    object_cognitive.cognitive(filepath, (error, value) => {
      console.log("Checking for any unwanted content in the file...\n");
      console.log(value.adult);
      if (
        value.adult.isAdultContent == true ||
        value.adult.isRacyContent == true ||
        value.adult.isGoryContent == true
      ) {
        console.log(
          "Image contains unwanted content. Please try with another image. "
        );
      } else {
        console.log("No unwanted content found... Trying to upload image.\n");
        object_downloadimg.download(filepath, "image.png", function () {});
        const download_imagepath = path.join(__dirname, "/image.png");
        fs.writeFileSync("cognitive_api_results.txt", JSON.stringify(value));

        async function upload_img() {
          const { error, stdout, stderr } = await exec(
            '$StorageAccount = Get-AzStorageAccount -ResourceGroupName "node" -Name "' +
              storage +
              '";$Context = $StorageAccount.Context;$Blob1HT = @{File = "' +
              download_imagepath +
              '" ; Container= "' +
              cont +
              '";Blob= "' +
              fname +
              '"; Context= $Context};Set-AzStorageBlobContent @Blob1HT',
            { shell: "powershell.exe" }
          );
          if (stderr) {
            return { error: stderr };
          }
          return { data: stdout };
        }
        upload_img()
          .then((data) => {
            console.log("Image file uploaded successfuly!");
            async function upload_cognitive_results() {
              const { error, stdout, stderr } = await exec(
                '$StorageAccount = Get-AzStorageAccount -ResourceGroupName "node" -Name "' +
                  storage +
                  '";$Context = $StorageAccount.Context;$Blob2HT = @{File = "E:/Node.js Tutorial/cognizant/azure-assignment/cognitive_api_results.txt" ; Container= "' +
                  cont +
                  '";Blob= "' +
                  fname +
                  '.txt"; Context= $Context};Set-AzStorageBlobContent @Blob2HT',
                { shell: "powershell.exe" }
              );
              if (stderr) {
                return { error: stderr };
              }
              return { data: stdout };
            }
            upload_cognitive_results()
              .then((data) => {
                console.log(
                  "Image cognitive-api results are uploaded successfuly!"
                );
              })
              .catch((err) => {
                console.log(err.stderr);
              });
          })
          .catch((err) => {
            console.log(err.stderr);
          });
      }
    });
  } else {
    console.log(
      "File extension not supported. Please upload images of extension .png .jpg and .jpg"
    );
  }
};

module.exports = { upload_image };
