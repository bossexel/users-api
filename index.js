const express = require("express");
const users = require("./users.json");

const app = express();
const PORT = process.env.PORT || 3000;


app.get("/", (req, res) => {
  res.json({
    message: "Users API is running",
    endpoints: ["/api/users", "/api/users/:id"]
  });
});

app.get("/api/users", (req, res) => {
  res.json(users);
});

app.get("/api/users/:id", (req, res) => {
  const user = users[Number(req.params.id) - 1];
  if (!user) return res.status(404).json({ error: "User not found" });
  res.json(user);
});

app.listen(PORT, () => console.log(`Listening on ${PORT}`));