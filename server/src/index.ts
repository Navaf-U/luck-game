import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import authRoutes from "./routes/authRoutes";
const app = express();
dotenv.config();
const PORT = process.env.PORT;

app.use(cors());
app.use(express.json());

app.use("/api", authRoutes);

app.listen(PORT, () => {
    console.log("Connected to server " + PORT);
});
