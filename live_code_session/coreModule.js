// core module sont les module installé avec node
// example fs
// fs a des methodes sync et async

// import core module=> installé avec node
const fs = require("fs");
// console.log(fs);

// ----------------------------------------------

// les methode async contien des call back functions=>
// step1
console.log("starting...");
// STEP3
fs.readFile("./file.txt", (err, data) => {
  err ? console.log(err) : console.log(data.toString());
});
// step2
console.log("finishing...");

// ----------------------------------------------------------------------------
// les methode synchrone sont des methode code bloquante
// step1
console.log("starting...");
// STEP2
let data = fs.readFileSync("./file.txt");
console.log(data.toString());
// step3
console.log("finishing...");
