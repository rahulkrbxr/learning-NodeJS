const express = require("express");
const fs = require("fs");
const users = require("./MOCK_DATA.json");

const app = express();
const PORT = 8000;

// Middleware - Plugin
// Used to reveive data from url into node req.body
app.use(express.urlencoded({ extended: false }));
// app.user(express.json({ extended: false }));

app.use((req, res, next) => {
  console.log("Hello from middleware 1");
  // return res.json({ status: "Hello from middleware 1" });
  //   req.myUserName = "rahul_dev";
  fs.appendFile(
    "log.txt",
    `\n${Date.now()}: ${req.method}: ${req.path}`,
    (err, date) => {
      next();
    }
  );
});

// app.use((req, res, next) => {
//   console.log("Hello from middleware 2", req.myUserName);
//   next();
// });

// Routes
app.get("/users", (req, res) => {
  const html = `
      <ul>
          ${users.map((user) => `<li>${user.first_name}</li>`).join("")}
      </ul>
      `;

  res.send(html);
});

// REST API
app.get("/api/users", (req, res) => {
  //   console.log("I'm in route", req.myUserName);
  //   res.set({ "X-myName": "Rahul" });
  //   console.log(req.headers);
  res.json(users);
});

app
  .route("/api/users/:id")
  .get((req, res) => {
    const id = Number(req.params.id);
    const user = users.find((user) => user.id === id);
    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }
    return res.send(user);
  })
  .patch((req, res) => {
    // TODO: Edit user with id
    return res.json({ status: "Pending" });
  })
  .delete((req, res) => {
    // TODO: Delete user with id
    return res.json({ status: "Pending" });
  });

app.post("/api/users", (req, res) => {
  const body = req.body;
  if (
    !body ||
    !body.first_name ||
    !body.last_name ||
    !body.email ||
    !body.gender ||
    !body.job_title
  ) {
    return res.status(400).json({ msg: "All fields are req.." });
  }
  users.push({ id: users.length + 1, ...body });
  fs.writeFile("./MOCK_DATA.json", JSON.stringify(users), (err, data) => {
    return res.status(201).json({ status: "Success", id: users.length });
  });
});

// app.get("/api/users/:id", (req, res) => {
//     const id = Number(req.params.id);
//     const user = users.find((user) => user.id === id);
//     return res.send(user);
//   });

// app.patch("/api/users/:id", (req, res) => {
//   // TODO: Edit user with id
//   return res.json({ status: "Pending" });
// });

// app.delete("/api/users/:id", (req, res) => {
//   // TODO: Delete user with id
//   return res.json({ status: "Pending" });
// });

app.listen(PORT, () => console.log(`Server running at Port ${PORT}`));
