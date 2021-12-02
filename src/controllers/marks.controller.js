const marksModel = require("../models/marks.model");
const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
    let users = await marksModel.find({}).lean().exec();
    console.log(users);

    res.status(200).send(users);
});

router.get("/eval/:evalId/topper", async (req, res) => {
    try {
        var arr = [];
        await marksModel.find({ "eval_id": req.params.evalId }, { "student_and_marks": true })
            .then((ans) => {
                return ans.forEach(async ({ student_and_marks }) => {
                    let max = 0; let student;

                    for (el of student_and_marks) {
                        if (el.marks > max) {
                            max = el.marks;
                            student = el;
                        }
                    }
                    return arr[0] = student;
                })

            })
        res.status(200).send(arr[0]);
    }
    catch (e) { res.status(500).send({ message: e.message, status: "failed" }) };
});


// post
router.post("/", async (req, res) => {
    try {
        let newStudent = await marksModel.create(req.body);
        console.log(newStudent);

        res.status(200).send(newStudent);
    }
    catch (e) {
        res.status(500).send({ message: e.message, status: "failed" })
    }
});

module.exports = router;