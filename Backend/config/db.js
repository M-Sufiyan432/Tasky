import mongoose from "mongoose";
import dotenv from "dotenv"

dotenv.config();


const connectDb = async () => {
  try {
    if(!process.env.Mongo_db_URl){
      throw new Error("Mongo Db URL is not defined")
    }
    mongoose.set("strictQuery", true);

    await mongoose.connect(process.env.Mongo_db_URl, {
      serverSelectionTimeoutMS: 5000,
      socketTimeoutMS: 45000,
    });

    console.log("✅ MongoDB connected");

     mongoose.connection.on("disconnected", () => {
      console.error("❌ MongoDB disconnected");
    });

    mongoose.connection.on("reconnected", () => {
      console.log("✅ MongoDB reconnected");
    });

    mongoose.connection.on("error", (err) => {
      console.error("❌ MongoDB error:", err.message);
    });
  } catch (error) {
    console.error("❌ MongoDB connection failed:", error.message);
    process.exit(1); 
  }
};

export default connectDb;
