import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config({ path: [".env.local", ".env"] });

if (!process.env.MONGODB_URI) {
    throw new Error('Invalid/Missing environment variable: "MONGODB_URI"');
}

const URI = process.env.MONGODB_URI;

mongoose
    .connect(URI)
    .then(() => {
        console.log("Connected to MongoDB");
    })
    .catch((e) => {
        console.error(e);
    });
