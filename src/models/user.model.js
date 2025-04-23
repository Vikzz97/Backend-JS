import mongoose, { Schema } from "mongoose";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const userSchema = new Schema({})


export const User = mongoose.model("User", userSchema)