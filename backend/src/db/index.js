const mongoose = require('mongoose');
const DB_NAME = process.env.DB_NAME;

const connectDB = async () => {
    try {
        const connection = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
        console.log("Database connected");
    } catch (error) {
        console.log('Mongo Connection Error',error);
        process.exit(1);
    }
}

module.exports = connectDB;