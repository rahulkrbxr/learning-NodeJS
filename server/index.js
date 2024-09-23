// const http = require('http');
// const fs = require('fs');
// const url = require('url');
const express = require("express");

const app = express();

app.get("/", (req, res) => {
  return res.send("Home page");
});

app.get("/about", (req, res) => {
  return res.send(`Hello, ${req.query.name}`);
});

app.listen(8000, () => {
  console.log("server running at port 8000");
});

// function myHandler(req, res) {
//     if (req.url == '/favicon.ico') return res.end();

//     const log = `${Date.now()}: ${req.method} ${req.url} New Req Received\n`;
//     const myUrl = url.parse(req.url, true);

//     fs.appendFile("./log.txt", log, (err, data) => {
//         switch(myUrl.pathname) {
//             case "/":
//                 if (req.method === 'GET') {
//                     res.end("Homepage");
//                 }
//                 break;
//             case "/about":
//                 const username = myUrl.query.myName;
//                 res.end(`Hi, ${username}`);
//                 break;
//             case "/search":
//                 const search = myUrl.query.search_query;
//                 res.end("Here are your result for " + search);
//             case "/signup":
//                 if (req.method === 'GET') {
//                     res.end('Signup page');
//                 } else if (req.method === 'POST') {
//                     // DB Query
//                     res.end('Success');
//                 }
//             default:
//                 res.end("404 Not Found", err);
//         }
//     });
// }

// const myServer = http.createServer(app);

// myServer.listen(8000, () => {
//     console.log('myServer started, listening to port 8000');
// });
