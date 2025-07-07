const mongoose = require('mongoose')



const connectToDb = async (app) => {
    const dburl = "mongodb+srv://ali:ali13771377@nodecourse.7ygh55p.mongodb.net/fitlanddb?retryWrites=true&w=majority&appName=nodecourse"
    try {
        const con=await mongoose.connect(dburl)
        console.log("Connected to mongodb")
        app.listen(8080, () => {
            console.log("Server running on port 8080");
        });
    }catch(err) {
        console.error(err);
    }

}
module.exports ={
    connectToDb,
}