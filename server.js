import express from "express";
import connectDB from "./db/index.js";
import notesRouter from "./routes/notesRouter.js";

const app = express();
const PORT = process.env.PORT;

//parse json
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server sucessfully running at PORT ${PORT}`);
    });
  })
  .catch((err) => {
    console.log("Failed to connect to DB");
  });

//Router
app.use("/api", notesRouter);
