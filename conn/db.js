const mongoose = require('mongoose');

const conn = async (req, res, next) => {
    try {
        await mongoose.connect("mongodb://admin:1234ccc@ac-5nef25s-shard-00-00.vnv2lvl.mongodb.net:27017,ac-5nef25s-shard-00-01.vnv2lvl.mongodb.net:27017,ac-5nef25s-shard-00-02.vnv2lvl.mongodb.net:27017/?ssl=true&replicaSet=atlas-8j8vo4-shard-0&authSource=admin&retryWrites=true&w=majority").then( () => {
            console.log("connected");
        })
    } catch (error) {
        console.log(error);
    }
}


conn();