const express = require("express");
const {data,dataIntrested}=require('../dataBase/productDb')

const router = express.Router();

router.get("/", async (req, res) => {
    res.json(data)
})

router.get('/interested',(req,res)=>{
    res.json(dataIntrested)

})


module.exports = {
    productNews: router,
}