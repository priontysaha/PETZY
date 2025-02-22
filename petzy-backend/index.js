import express from "express";
import { users, addUser, removeUser } from "./data.js";

const PORT = 3000;
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Petzy backend server ready!");
});

app.get("/pets/", (req, res) => {
  res.send("There are 3 pets");
});
app.get("/users", (req, res) => {
  return res.status(200).json(users);
});

app.post("/users", (req, res) => {
  const { name, email } = req.body;

  const anotherUser = users.find((user) => user.email === email);
  if (anotherUser) {
    return res.status(400).json({ error: "Email is already in use." });
  }

  addUser({ name, email });

  return res.status(201).json({ message: "New user created" });
});

app.delete("/users/:email", (req, res) => {
  const { email } = req.params;

  const user = users.find((user) => user.email === email);
  if (!user) {
    return res.status(404).json({ error: "User not found" });
  }

  const newUsers = users.filter((user) => user.email !== email);

  removeUser(newUsers);

  return res.status(200).json({ message: "User deleted" });
});

app.listen(PORT, () => {
  console.log("App is up and listening to http://localhost:" + PORT);
});
