import mongoose from "mongoose";

const FacultySchema = new mongoose.Schema(
    {
        "name": { type: String },
        "deg": { type: String },
        "position": { type: String }
    }
);

export const FacultyModel = mongoose.model("faculty", FacultySchema);