const evalsModel = require("../models/eval.model");
const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
    let users = await evalsModel.find({}).lean().exec();
    console.log(users);

    res.status(200).send(users);
});

router.get("/allstudents/:evalId", async (req, res) => {
    let allstudents = await evalsModel.findById(req.params.evalId, { "candidates": true }).populate({ path: "candidates",select: "user_id", populate: { path: "user_id", select: "first_name" } }).lean().exec();
    console.log(allstudents);

    res.status(200).send(allstudents);
});

// post
router.post("/", async (req, res) => {
    try {
        let newStudent = await evalsModel.create(req.body);
        console.log(newStudent);

        res.status(200).send(newStudent);
    }
    catch (e) {
        res.status(500).send({ message: e.message, status: "failed" })
    }
});

module.exports = router;