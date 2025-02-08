import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import dotenv from "dotenv";
const app = express();
dotenv.config();
const PORT = process.env.PORT;

app.use(cors());
app.use(express.json());



interface Error {
    status?: number;
    message?: string;
}

app.listen(PORT, () => {
    console.log("Connected to server " + PORT);
});
