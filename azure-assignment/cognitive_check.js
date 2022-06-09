"use strict";
const request = require("request");

const cognitive = (url, callback) => {
  let subscriptionKey = "790fa7cb9fb2407c83eef50072dd5d16";
  let endpoint = "https://computerviz2022xx82.cognitiveservices.azure.com/";

  request.post(
    {
      uri: endpoint + "vision/v3.1/analyze",
      qs: {
        visualFeatures: "Adult,Objects,Faces,Brands",
        details: "",
        language: "en",
      },
      body: '{"url": ' + '"' + url + '"}',
      headers: {
        "Content-Type": "application/json",
        "Ocp-Apim-Subscription-Key": subscriptionKey,
      },
    },
    (error, response, body) => {
      if (error) {
        console.log("Error: ", error);
        return callback(error, undefined);
      } else if (body.error) {
        console.log("Error! please try another image!");
      } else {
        let jsonResponse = JSON.parse(body);
        return callback(undefined, jsonResponse);
      }
    }
  );
};

module.exports = { cognitive };
