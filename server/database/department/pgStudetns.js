import mongoose from "mongoose";

const PgStudentsSchema = new mongoose.Schema(
    {
        "name": { type: String },
        "deg": { type: String },
        "description": [
            {
                type: String
            }
        ]
    }
);

export const PGModel = mongoose.model("faculty", PgStudentsSchema);