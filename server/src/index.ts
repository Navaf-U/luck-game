import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";

const app = express();
dotenv.config();

app.use(cors());
app.use(express.json());

const connect = async () => {
    try {
        const mongoUri = process.env.MONGODB;
        if (!mongoUri) {
            throw new Error("MONGODB environment variable is not defined");
        }
        await mongoose.connect(mongoUri);
        console.log("Connected to MongoDB");
    } catch (error) {
        console.log(error);
    }
};

app.listen(3000, () => {
    connect();
    console.log("Connected to backend");
});