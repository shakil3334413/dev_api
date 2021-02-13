const mongoose = require('mongoose');


const conectDB = async() => {
    const conn = await mongoose.connect(process.env.MONGO_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: true
    });

    console.log(`Mongoes Connected ${conn.connection.host}`
        .cyan.underline.bold);
}

module.exports = conectDB