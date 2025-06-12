const express = require('express');
const {homeRouter} = require('./router/homeRouter');
const {newsRouter} = require("./router/newsRouter");
const {loginRouter} = require("./router/loginUser")
const {myRouter}=require("./router/myPost");
const {productNews} = require("./router/productRouter");
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');
const {connectToDb} = require('./model/dbFile');

const app = express();

(async () => {
    await connectToDb(app);
})();

app.use('/images', express.static(path.join(__dirname, 'public/images')));

app.use(cors());
app.use(bodyParser.json());
app.use("/home", homeRouter);
app.use("/news", newsRouter);
app.use("/user", loginRouter);
app.use("/products", productNews);
app.use("/mypost", myRouter);

app.get('/', async (req, res) => {
    res.send("Welcome ");
});

