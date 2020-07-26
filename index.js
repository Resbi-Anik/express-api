const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const PORT = 5000;

const usersRoutes = require('./routes/users.js');

app.use(bodyParser.json());

app.use('/users', usersRoutes);

app.get("/", (req, res) => {
  res.json("hello world");
});

app.listen(PORT, () => {
  console.log(`server running at port number :${PORT}`);
});
