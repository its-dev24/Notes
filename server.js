import express from "express";
import connectDB from "./db/index.js";
import notesRouter from "./routes/notesRouter.js";
import logger from "./utility/logger.js";
const app = express();
const PORT = process.env.PORT;

//parse json
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//Logger
app.use(logger);

//Router
app.use("/api", notesRouter);

connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server sucessfully running at PORT ${PORT}`);
    });
  })
  .catch((err) => {
    console.log("Failed to connect to DB");
  });
