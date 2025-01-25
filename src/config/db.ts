import mongoose from "mongoose";
import { config } from "./config";

const connectToDb = async () => {
  try {
    mongoose.connection.on("connected", () => {
      console.log("Connected Successfully to the DB");
    });

    mongoose.connection.on("error", (error) => {
      console.log("Error in connecting to DB", error);
    });
    await mongoose.connect(config.databaseUrl as string);
  } catch (error) {
    console.log("Failed in connecting to the DB", error);
    process.exit(1);
  }
};

export default connectToDb;
