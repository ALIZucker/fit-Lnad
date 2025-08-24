const express = require("express");
const {data, dataIntrested} = require('../dataBase/productDb')

const router = express.Router();

router.get("/", async (req, res) => {
    res.json(data)
})

router.get('/interested', (req, res) => {
    res.json(dataIntrested)

})

router.post("/detailsPost", (req, res) => {
    const {projectName} = req.body;

    const filtered = data.filter(value => value.title === projectName)

    if (!projectName) {
        return res.status(400).json({error: "projectName is required"});
    }

    // مثلا برگردوندن دیتای تستی
    res.json({
        message: "Product details fetched successfully",
        filtered,
    });
});


module.exports = {
    productNews: router,
}