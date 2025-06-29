import mongoose from "mongoose";

const MONGO_URI = process.env.MONGO_URI;

const connectDB = async () => {
  try {
    const connectionInstance = await mongoose.connect(MONGO_URI);
    if (connectionInstance) {
      console.log(
        `connected to mongoDB instance ${connectionInstance.connection.db}`
      );
    }
  } catch (error) {
    console.log(`Failed to connect to to database : ${error}`);
  }
};

export default connectDB;
