const express = require('express');
const {userModel} = require('../model/user');

const jwt = require('jsonwebtoken');


const router = express.Router();
const secretKey = "ee9440eaf2579ea6090d508c653a87d117adf744cd0844cdb3eb622b9cc19f8d92d7d66011fba2d04d551beb2585e70315d156864bb9622e85907f37f0bc2d81"
const blacklist = []

router.post('/register', async (req, res) => {
    const {name, email, phonenumber} = req.body;
    console.log(name, email, phonenumber);
    console.log("**********************");
    const newUser = new userModel({
        name,
        email,
        phonenumber
    });
    userModel.findOne({phonenumber}).then(user => {
        console.log(user.name);
    }).catch(err => {
        newUser.save().then(() => {
            console.log("saved")
            const token = jwt.sign({email, role: "user", name}, secretKey, {expiresIn: '1h'});
            return res.json({token});
        }).catch(err => {
            console.log("error")
        });
    })


})

router.post('/login', async (req, res) => {
    const {phonenumber} = req.body;
    // کاربر
    console.log("---------------------");
    console.log(phonenumber);
    console.log("---------------------");
    userModel.findOne({phonenumber})
        .then(userModel => {

            const token = jwt.sign({
                email: userModel.email,
                role: "user",
                name: userModel.name
            }, secretKey, {expiresIn: '1h'});
            return res.json({token});

        })
        .catch(err => {
            console.log("error");
            return res.status(401).json({message: 'ایمیل یا رمز اشتباه اس'});

        })
})

router.post('/logout', async (req, res) => {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) {
        return res.status(400).json({message: 'توکن ارسال نشده'})
    }
    try {
        const decoded = jwt.verify(token, secretKey);
        blacklist.push(token);
        console.log('خروج موفقیت‌آمیز بود');
        console.log(token);
        return res.json({message: 'خروج موفقیت‌آمیز بود'});

    } catch (err) {
        return res.status(401).json({massage: 'توکن وجود ندارد.'})
    }
})

module.exports = {
    loginRouter: router,
};