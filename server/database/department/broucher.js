import mongoose from "mongoose";

const BroucherSchema = new mongoose.Schema(
    {
        "name": { type: String },        
        "url": [
            {
                type: String
            }
        ]
    }
);

export const Model = mongoose.model("faculty", BroucherSchema);