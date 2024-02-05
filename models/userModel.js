import { Schema, model } from "mongoose";

const userSchema = new Schema({
    username: {
        type: String,
        require: true,
    },
    email: {
        type: String,
        require: true,
        unique: true,
    },
    password: {
        type: String,
        require: true,
    },
    role: {
        type: String,
        default: "user",
    },
});

const User = model("User", userSchema);

export default User;
