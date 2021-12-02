const { Schema, model} = require("mongoose");

const topicSchema = new Schema({
    name: { type: String, required: true }
});

module.exports = model("topics", topicSchema);
