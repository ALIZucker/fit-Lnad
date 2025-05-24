const express = require("express");
const {dbTakhfif, takhfifDbBike} = require("../dataBase/homeDb");

const router = express.Router();


router.get("/", async (req, res) => {

    res.json(dbTakhfif);
})

router.get('/takhfif', async (req, res) => {

    res.json(takhfifDbBike);

})

module.exports = {
    homeRouter: router
};