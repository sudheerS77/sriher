import mongoose from "mongoose";

const VisitingFacultySchema = new mongoose.Schema(
    {
        "name": { type: String },        
        "position": { type: String }
    }
);

export const VisitingFacultyModel = mongoose.model("faculty", VisitingFacultySchema);