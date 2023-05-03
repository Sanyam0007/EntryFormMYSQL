const express = require("express");
const mysql = require("mysql");
const app = express();
const cors = require("cors");
app.use(express.json());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "deviseasy",
  database: "userdatabase",
});
app.use(cors());

app.get("/users", (req, res) => {
  db.query("SELECT * FROM users Order by email Limit 4", (error, results) => {
    if (error) return res.json(error);
    res.send(results);
  });
});

app.post("/add", (req, res) => {
  const { name, email, phone, password } = req.body;
  console.log("req data->", req.body);
  const query = `INSERT INTO users (username,email,password,phone) VALUES ("${name}","${email}","${password}","${phone}")`;
  db.query(query, function (err) {
    if (err) throw err;
    console.log("1 record inserted");
  });
});

app.listen(3001, () => {
  console.log("Server is listening on port 3001.");
});
