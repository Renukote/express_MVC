const mongoose = require("mongoose");

const userModel = new mongoose.Schema({
    first_name: { type: String, required: true },
    last_name: { type: String, required: true },
    DOB: { type: String, required: true },
    role: { type: String, required: true },
    gender: { type: String, required: true, default: "Male" },
},
{
    versionKey: false,
    timestamps: true
});

module.exports = mongoose.model("users",userModel);