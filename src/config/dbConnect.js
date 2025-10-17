import mongoose, { mongo } from "mongoose";

async function conectDataBase() {
    mongoose.connect("mongodb+srv://yuri:12345@cluster0.dnsp8l8.mongodb.net/library?retryWrites=true&w=majority&appName=Cluster0");
    return mongoose.connection;
}

export default conectDataBase;