const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const userRoute = require("./routes/user.js");
const authRoute = require("./routes/auth.js");

dotenv.config();

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("DBConnection Successfull!!"))
  .catch(() => console.log("Error!!"));

app.use(express.json());
app.use("/api/user", userRoute);
app.use("/api/auth", authRoute);
app.listen(process.env.PORT || 5000, () => {
  console.log("Backend server is running!");
});
