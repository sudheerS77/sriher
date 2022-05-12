import mongoose from "mongoose";

const SliderSchema = new mongoose.Schema(
    {
        "slider": [
            {
                type: String
            }
        ]
    }
);

export const SliderModel = mongoose.model("faculty", SliderSchema);