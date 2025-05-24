const express = require("express");
const {showNews}=require("../dataBase/newsDb")

const router = express.Router();

router.get("/show", async (req, res) => {

    res.json(showNews);
})

module.exports = {
    newsRouter: router
};
