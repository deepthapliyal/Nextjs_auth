const mongoose = require("mongoose");

//connect to mongoose 
async function connectToMongo(){
try {
    
     await mongoose.connect('mongodb://127.0.0.1:27017/Authuser',{
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
    console.log("connected to mongo")
} catch (error) {
    console.error('connection error ', error.message);


}
}

module.exports = connectToMongo;