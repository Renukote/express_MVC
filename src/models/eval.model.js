const mongoose = require("mongoose");

const evalSchema = new mongoose.Schema({
    candidates: [{ type: mongoose.Schema.Types.ObjectId, required: true, ref: "students" }],
    instructor: { type: mongoose.Schema.Types.ObjectId, required: true, ref: "instructors"},
    topic: { type: mongoose.Schema.Types.ObjectId, required: true, ref: "topics"},
    date_of_eval: { type: String, required: true },
});

module.exports = mongoose.model("evals", evalSchema);
