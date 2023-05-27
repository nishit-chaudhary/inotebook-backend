const mongoose = require('mongoose');

const mongoURI = "mongodb://127.0.0.1:27017/inotebook";

const connectToMongo = () => {
    mongoose.connect(mongoURI, { useNewUrlParser: true })
    .then(() => console.log("Connected to Database Successfully"))
    .catch((err) => {console.log(err);});
}

module.exports = connectToMongo;