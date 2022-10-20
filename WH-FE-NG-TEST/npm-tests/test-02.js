//@ts-check
/**
 * run from root folder as : node ./npm-tests/test-02.js
 *
 * Parse the response from the given REST end point and print out "hobbies" property in the following format: ITEM1, ITEM2, ...
 */
import https from "https";

https.get(
  "https://coderbyte.com/api/challenges/json/rest-get-simple",
  (res) => {
    var bodyChunks = [];
    res
      .on("data", function (chunk) {
        bodyChunks.push(chunk);
      })
      .on("end", function () {
        var body = Buffer.concat(bodyChunks);
        const data = JSON.parse(body.toString());
        console.log(data.hobbies.join(", "));
        // ...and/or process the entire body here.
      });
    // parse json and print "hobbies" property as ITEM1, ITEM2,...
    console.log();
  }
);
