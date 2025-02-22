import express from "express";
import userRouter from "./routes/userRoutes.js";
import { log } from "./middlewares/logger.js";
import mongoose from "mongoose";

const PORT = 3000;
const app = express();

mongoose
  .connect(
    "mongodb+srv://Priontysaha:priontysaha003@cluster.to8fx.mongodb.net/"
  )
  .then(() => console.log("Database connected "))
  .catch((err) => console.log(`Error connecting database ${err}`));

app.use(express.json());
app.use(log);

app.get("/", (req, res) => {
  res.send("Petzy backend server ready!");
});

app.get("/pets/", (req, res) => {
  res.send("There are 3 pets");
});

app.use("/users", userRouter);

app.listen(PORT, () => {
  console.log("App is up and listening to http://localhost:" + PORT);
});
