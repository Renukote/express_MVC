const topicModel = require("../models/topic.model");
const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
    let users = await topicModel.find({}).populate({ path: "user_id", select: "first_name"}).lean().exec();
    console.log(users);

    res.status(200).send(users);
});

// post
router.post("/", async (req, res) => {
    try{
        let newStudent = await topicModel.create(req.body);
        console.log(newStudent);
    
        res.status(200).send(newStudent);
    }
    catch(e) {
        res.status(500).send({message: e.message, status: "failed" })
    }
});

module.exports = router;