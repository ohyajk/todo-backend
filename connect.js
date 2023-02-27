const mongoose = require('mongoose')

mongoose.set("strictQuery", false);

mongoose.connect('mongodb://0.0.0.0:27017/todo', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log("Connection Successfully established...")
}).catch(err => {console.log("Theres a problem sire...",err)})