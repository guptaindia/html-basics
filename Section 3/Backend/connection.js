const mongoose = require('mongoose');

const url = "mongodb+srv://babyindia200:Himanshu@cluster0.emkfpdp.mongodb.net/mydatabase?retryWrites=true&w=majority&appName=Cluster0";

//asynchronous functions - returns promise (handles with then catch)

mongoose.connect(url)
.then((result) => {
    console.log('database connected');
}).catch((err) => {
    console.log(err);
});
module.exports = mongoose;