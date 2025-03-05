import User from "../models/user.js";
import registerUser from "../Services/registerService.js";
import loginUser_DB from "../Services/loginService.js";
import { generateRefreshToken } from "../Utils/jwtUtils.js";

export const getAllUsers = async (req, res) => {
  const allUsers = await User.find().select(["-__v"]);
  return res.status(200).json(allUsers);
};

export const createUser = async (req, res) => {
  const { fullName, email, password } = req.body;

  const anotherUser = await User.exists({ email });
  if (anotherUser) {
    return res.status(400).json({ error: "Email  is already in use." });
  }

  // const newUser = await User.create({ email, fullName });
  const newUser = await registerUser({
    email: email,
    password: password,
    fullName: fullName,
  });

  return res.status(201).json({ newUser });
};

export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    const data = await loginUser_DB(email, password);
    const rtoken = generateRefreshToken(email);

    const rUser = {
      ...data,
      refreshToken: rtoken,
    };

    res.json(rUser);
  } catch (error) {
    res.status(401).json({ message: "Invalid credentials" });
  }
};

export const updateUserByEmail = async (req, res) => {
  const { email } = req.params;
  const { name: newName, email: newEmail } = req.body;

  const user = await User.findOne({ email });
  console.log(user);

  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  const anotherUser = await User.findOne({ email: newEmail });

  if (anotherUser && anotherUser.id !== user.id) {
    return res.status(400).json({ error: "User is already in use" });
  }

  user.email = newEmail;
  user.name = newName;
  user.save();

  return res.status(200).json({ message: "User updated successfully" });
};

export const deleteUser = async (req, res) => {
  const { email } = req.params;

  const user = await User.findOne({ email: email });

  console.log(user);
  if (!user) {
    return res.status(404).json({ error: "User not found" });
  }

  await User.deleteOne({ email });

  return res.status(200).json({ message: "User deleted" });
};
