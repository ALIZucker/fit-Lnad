const mongoose = require('mongoose');


const userPostSchema = new mongoose.Schema({
    post: {
        situation: {type: String, required: true},
        dateOrder: {type: String, required: true},
        codeOrder: {type: String, required: true},
        pay: {type: String, required: true},
        offPay: {type: String, required: true},
        images: [String] // array of strings
    }

});

const usePost = mongoose.model('Post', userPostSchema);

module.exports = {
    usePost,
};