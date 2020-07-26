const express = require("express");
const { v4: uuidV4 } = require("uuid");

const router = express.Router();

let users = [];

router.get("/", (req, res) => {
  res.send(users);
});

router.get("/:id", (req, res) => {
  console.log(req.params.id);
  const { id } = req.params;
  const findUser = users.find((user) => user.id === id);

  res.send(findUser);
});

router.post("/", (req, res) => {
  const user = req.body;
  const userWithId = { ...user, id: uuidV4() };

  users.push(userWithId);
  res.send("post");
});

router.delete("/:id", (req, res) => {
  const { id } = req.params;

  users = users.filter((user) => user.id !== id);
  console.log(users);
});

router.patch("/:id", (req, res) => {
  const { age } = req.body;
  const { id } = req.params;
  const user = users.find((user) => user.id === id);

  console.log(user);
  if (age) {
    user.age = age;
  }
  res.send("updated");
});

module.exports = router;
