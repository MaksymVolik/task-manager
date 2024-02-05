import mongoose from "mongoose";
import { DB_password } from "./secret.js";

const URI = `mongodb+srv://maksymvolik:${DB_password}@cluster0.qaxwyrs.mongodb.net/?retryWrites=true&w=majority`;

mongoose
    .connect(URI)
    .then(() => {
        console.log("Connected to MongoDB");
    })
    .catch((e) => {
        console.error(e);
    });
