const fs = require("fs");

//filesystem module

fs.readFile("a.txt", "utf8", function (err, data) {
  console.log(data);
});

console.log("he there");

// my own asynchronous function
function kiratsReadFile(cb) {
  fs.readFile("a.text", "utf-8", function (err, data) {
    cb(data);
  });
}

//callbackfunction to call
function onDone(data) {
  console.log(data);
}

kiratsReadFile(onDone);

// my own asynchronous function using promises

function kiratsReadFile() {
  return new Promise(function (resolve, reject) {
    fs.readFile("a.txt", "utf-8", function (err, data) {
      if (err) {
        reject(err);
      } else {
        resolve(data);
      }
    });
  });
}

function onDone(data) {
  console.log(data);
}

kiratsReadFile()
  .then(onDone)
  .catch((err) => {
    console.error("Error reading file:", err);
  });

function kiratsAsyncFunction() {
  let p = new Promise(function (resolve) {
    // do some async logic here
    setTimeout(function () {
      resolve("hi there!");
    }, 1000);
  });
  return p;
}

async function main() {
  // no callbacks, no .then syntax
  let value = await kiratsAsyncFunction();
  console.log("hi there1");
  console.log(value);
}

main();
