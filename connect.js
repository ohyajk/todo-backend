require("dotenv").config()
const mongoose = require('mongoose')

mongoose.set("strictQuery", false);

mongoose.connect( process.env.MONGODB_URL , {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Connection Successfully established...")
}).catch(err => {console.log("Theres a problem sire...",err)})