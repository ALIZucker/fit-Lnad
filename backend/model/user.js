const mongoose = require('mongoose');
const Schema = mongoose.Schema


const userSchema = new Schema({
    name: {type: String, required: true},
    email: {type: String, required: true},
    phonenumber: {type: String, required: true},

},{timestamps:true});

const userModel = mongoose.model('User', userSchema);




module.exports = {
    userModel,
}