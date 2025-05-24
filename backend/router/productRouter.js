const express = require("express");
const {data}=require('../dataBase/productDb')

const router = express.Router();

router.get("/", async (req, res) => {
    res.json(data)
})


module.exports = {
    productNews: router,
}