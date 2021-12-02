const express = require("express");
const app = express();

const connect = require('./configs/db.js');
const userController = require("./controllers/users.controllers");
const studentController = require("./controllers/students.contoller");
const evalsController = require("./controllers/evals.controller");
const instructorsController = require("./controllers/instructors.controller");
const topicsController = require("./controllers/topics.controller");
const marksController = require("./controllers/marks.controller");

app.use(express.json());
app.use("/users", userController);
app.use("/students", studentController);
app.use("/evals", evalsController);
app.use("/instructors", instructorsController);
app.use("/topics", topicsController);
app.use("/marks", marksController);




app.listen(5555, async (req, res) => {
    await connect();
    console.log("Listening to port 5555");
});