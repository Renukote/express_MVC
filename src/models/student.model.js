const { Schema, model } = require("mongoose");

const studentModel = new Schema({
    user_id: { type: Schema.Types.ObjectId, ref: "users", required: true },
    current_batch: { type: String, required: true },
},
{
    versionKey: false,
    timestamps: true
});

module.exports = model("students", studentModel);