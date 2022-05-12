import mongoose from "mongoose";
import bcrypt, { hash } from "bcryptjs";
import jwt from "jsonwebtoken";
const UserSchema = new mongoose.Schema(
    {
        fullname: { type: String},
        email: { type: String, required: true },
        password: { type: String },
        address: [{ detail: { type: String }, for: { type: String } }],
        phoneNumber: [{ type: Number }],   
    },
    {
        timestamps: true,
    }
);
UserSchema.methods.generateJwtToken = function() {
    return jwt.sign({ user: this._id.toString() }, "AUTH");
}

UserSchema.statics.findUserByEmailAndPhone = async ({ email, phoneNumber }) => {
    const checkUserByEmail = await UserModel.findOne({ email });
    const checkUserByPhone = await UserModel.findOne({ phoneNumber });
    console.log(checkUserByEmail);
    console.log(checkUserByPhone);

    if(checkUserByEmail || checkUserByPhone) throw Error("User already exist");

    return false
}

UserSchema.statics.findUserByEmailAndPassword = async ({ email, password }) => {
    const user = await UserModel.findOne({ email });
    console.log(user);

    if(!user) throw Error("User Doesn\'t Exist");

    const cmpPassword = await bcrypt.compare(password, user.password);
    console.log(cmpPassword);

    if(!cmpPassword) {        
        throw new Error("Password didnt match");
    }
    return user;
}


UserSchema.pre("save", function(next) {
    const user = this;
    if(!user.isModified("password")) return next();

    //generate salt
    bcrypt.genSalt(8, (error, salt) => {
        if(error) return next(error);
        bcrypt.hash(user.password, salt, (error, hash) => {
            if(error) return next(error);
            user.password = hash;
            return next();
        })
    })
});

export const UserModel = mongoose.model("Users", UserSchema);