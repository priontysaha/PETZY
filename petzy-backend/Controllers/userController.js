import { users, addUser, updateUser, removeUser } from "../data.js";

export const getAllUsers = (req, res) => {
  return res.status(200).json(users);
};

export const createUser = (req, res) => {
  const { name, email } = req.body;

  const anotherUser = users.find((user) => user.email === email);
  if (anotherUser) {
    return res.status(400).json({ error: "Email  is already in use." });
  }

  addUser({ name, email });

  return res.status(201).json({ message: "New user created" });
};

export const updateUserByEmail = (req, res) => {
  const { email } = req.params;
  const { name: newName, email: newEmail } = req.body;

  const user = users.find((user) => user.email === email);

  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  user.name = newName;
  user.email = newEmail;

  updateUser(users);

  return res.status(200).json({ message: "User updated successfully" });
};

export const deleteUser = (req, res) => {
  const { email } = req.params;

  const user = users.find((user) => user.email === email);
  if (!user) {
    return res.status(404).json({ error: "User not found" });
  }

  const newUsers = users.filter((user) => user.email !== email);

  removeUser(newUsers);

  return res.status(200).json({ message: "User deleted" });
};
