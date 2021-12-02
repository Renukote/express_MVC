const mongoose = require("mongoose");

const marksSchema = new mongoose.Schema({
   eval_id: { type: mongoose.Schema.Types.ObjectId, required: true, ref: "evals"},
   student_and_marks: [{ 
       student: {
           type: mongoose.Schema.Types.ObjectId,
           ref: "students"
       },
       marks: { 
           type: Number
       }
   }]
});

module.exports = mongoose.model("marks", marksSchema);
