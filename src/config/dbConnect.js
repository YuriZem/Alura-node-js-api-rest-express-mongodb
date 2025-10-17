import mongoose, { mongo } from "mongoose";
import dotenv from "dotenv";
dotenv.config();
async function conectDataBase() {
    // mongoose.connect("mongodb+srv://yuri:12345@cluster0.dnsp8l8.mongodb.net/library?retryWrites=true&w=majority&appName=Cluster0");
    mongoose.connect(process.env.MONGO_KEY);
    return mongoose.connection;
}

export default conectDataBase;