const userModel = require("../models/user.model");
const express = require("express");
const router = express.Router();

router.get("/", async (req, res) => {
    let users = await userModel.find({}).lean().exec();
    console.log(users);

    res.status(200).send(users);
});

// post
router.post("/", async (req, res) => {
    let newUser = await userModel.create(req.body);
    console.log(newUser);

    res.status(200).send(newUser);
});

module.exports = router;