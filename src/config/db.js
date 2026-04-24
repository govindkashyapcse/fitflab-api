import mongoose from "mongoose";
import dns from "node:dns/promises";
import dotenv from "dotenv"
dns.setServers(["1.1.1.1", "1.0.0.1"]);

dotenv.config()
const connectDB = () => { 
  mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB connected successfully");
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err.message);
  });

}
export default connectDB;
