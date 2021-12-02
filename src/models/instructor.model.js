const mongoose = require("mongoose");

const instructorSchema = new mongoose.Schema({
   subject: { type: String, required: true },
   user_id: { type: mongoose.Schema.Types.ObjectId, required: true, path: "users" }
});

module.exports = mongoose.model("instructors", instructorSchema);
