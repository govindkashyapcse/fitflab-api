import mongoose from "mongoose";
import dns from "node:dns/promises";
import dotenv from "dotenv"
dns.setServers(["1.1.1.1", "1.0.0.1"]);

dotenv.config()
const connectDB = async () => { 
  try{
    await mongoose.connect(process.env.MONGO_URI)
    console.log("MongoDB connected successfully");
  }catch{
    console.error("MongoDB connection error:", err.message);
    setTimeout(connectDB, 5000);
  }
  
    
    

}
export default connectDB;
