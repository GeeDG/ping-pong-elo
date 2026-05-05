const express = require("express");

const app = express();
const port = 3000;

app.use(express.json());
app.use(express.static("public"));

const players = [
  {
    id: 1,
    name: "Alice",
    rating: 1000
  },
  {
    id: 2,
    name: "Bob",
    rating: 1000
  }
];

app.get("/api/players", (req, res) => {
  res.json(players);
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});