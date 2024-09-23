const fs = require("fs");
const os = require("os");

// Sync blocking operation
// fs.writeFileSync("./data.txt", "Namaste World");

// Async Non-blocking operation
// fs.writeFile("./data.txt", "Writing using async file system, fs", (err) => {});

// Sync
// const result = fs.readFileSync("./contact.txt", "utf-8");
// console.log(result);

// Async
// fs.readFile("./contact.txt", "utf-8", (err, result) => {
//     if (err) {
//         console.log('Error', err);
//     } else {
//         console.log(result);
//     }
// } )

// fs.appendFileSync('./data.txt', `${Date.now()} Hey there\\n`);

// fs.cpSync('./data.txt', './copy.txt');

// fs.unlinkSync('./copy.txt');

// fs.mkdirSync('./my-docs');
// fs.mkdirSync('./my-docss/a/b', {recursive: true});

// Blocking code / Sync
// console.log('1');
// const result = fs.readFileSync('./data.txt', 'utf-8');
// console.log(result);
// console.log('2');

// Non - blocking code / ASync
console.log("1");
fs.readFile("./data.txt", "utf-8", (err, result) => {
  console.log(result);
});

console.log("2");

console.log(os.cpus().length);
