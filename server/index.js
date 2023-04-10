const authRoute = require("./routes/auth")
const userRoute = require("./routes/users")
const express = require("express");
const app = express();
app.use(express.json({ extended: false }));

const dotenv = require("dotenv");
const mongoose = require("mongoose");

dotenv.config();

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("DB Connetion Successfull");
  })
  .catch((err) => {
    console.log(err.message);
  });

app.use("/api/auth", authRoute);
app.use("/api/users", userRoute)

app.listen("5000", () => {
  console.log("Server is running in port 5000");
});
