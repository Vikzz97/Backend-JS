import mongoose from "mongoose";
import { DB_NAME } from "../constants";

const connectDB = async () => {
    try {
        
    } catch (error) {
        console.log("MONGODB connection FAILED ", error);
        process.exit(1)
        
    }
}

export default connectDB