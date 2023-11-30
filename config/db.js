const mongoose = require('mongoose');

const connectDB = async =>{
    try {
        const uri = "mongodb+srv://inderjeet0638be21:pQmoCTCg4FIwKBCb@cluster0.ogysgwi.mongodb.net/?retryWrites=true&w=majority";
        mongoose.connect(uri,{
            useNewUrlParser:true,
            useUnifiedtopology:true
        })
        .then(()=>{
            console.log("Database connected")
        })
    } catch (error) {
        onsole.error('MongoDB connection failed:', error.message);
        process.exit(1);
    }
}

module.exports = connectDB;