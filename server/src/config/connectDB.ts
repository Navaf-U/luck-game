import mongoose from "mongoose";

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