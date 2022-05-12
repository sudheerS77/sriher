import mongoose from "mongoose";

const EventsSchema = new mongoose.Schema(
    {
        "eventName": { type: String },
        "description": [
            {
                type: String
            }
        ],
        "image": { type: String },
        "status": { type: String }
    }
);

export const EventsModel = mongoose.model("faculty", EventsSchema);