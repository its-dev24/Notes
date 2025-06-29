import express from "express";
import connectDB from "./db/index.js";

const app = express();
const PORT = process.env.PORT;

connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server sucessfully running at PORT ${PORT}`);
    });
  })
  .catch((err) => {
    console.log("Failed to connect to DB");
  });
