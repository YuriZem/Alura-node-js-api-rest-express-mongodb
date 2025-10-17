import mongoose, { mongo } from "mongoose";
import dotenv from "dotenv";
dotenv.config();
async function conectDataBase() {
    mongoose.connect(process.env.MONGO_KEY);
    return mongoose.connection;
}

export default conectDataBase;