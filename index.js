require("dotenv").config();
const express = require("express");

//intitiliazing express
const server = express();
const cors = require("cors");


const port = process.env.PORT || 9000;

server.use(cors());
server.use(express.json());

// GET	/api/users	Returns an array users.
server.get("/api/users", (req, res) => {
  const users = [
    {username: "Chris", password: "password"},
    {username: "Greg", password: "password"}
  ];
  res.status(200).json(users)
})

// POST	/api/register	Creates a user from { username, password } 
//in the request body, responds with newly created user.
server.post("/api/register", (req, res) => {
  res.json ({
    username: req.body.username,
    password: req.body.password
  })
})

//POST	/api/login	Checks { username, password } 
// in the request body, responds with a welcome message.



//Catch All endpoint
server.use("*", (req, res) => {
  res.json({
    data: "API Data Served!"
  })
})

server.listen(port, () => {
  console.log(`\nServer is on port: ${port}`)
});