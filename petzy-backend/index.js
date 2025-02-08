import express from "express";

const PORT = 3000;
const app = express();

app.use(express.json());

app.listen(PORT, () => {
  console.log("App is up and listening to http://localhost:" + PORT);
});

app.get("/", (req, res) => {
  res.send("Petzy backend server ready!");
});

app.get("/pets/", (req, res) => {
  res.send("There are 3 pets");
});
