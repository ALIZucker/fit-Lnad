const express = require('express');
const {homeRouter} = require('./router/homeRouter');
const {newsRouter} = require("./router/newsRouter");
const {loginRouter}=require("./router/loginUser")
const {productNews}=require("./router/productRouter");
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');


const app = express();

app.use('/images', express.static(path.join(__dirname, 'public/images')));

app.use(cors());
app.use(bodyParser.json());
app.use("/home", homeRouter);
app.use("/news",newsRouter);
app.use("/user",loginRouter);
app.use("/products",productNews);

app.get('/', async (req, res) => {
    res.send("Welcome ");
});

app.listen(8080, () => {
    console.log("Server running on port 8080");
});