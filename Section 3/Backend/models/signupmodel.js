const {Schema, model} = require('../connection');

const mySchema = new Schema({
    mail: {type : String, required : true},
    name :{type : String, required : true},
    password : {type : String, required : true},
    createdOn : Date,
});
//signupCollection is the name of document collection in db
module.exports = model('signupcollection', mySchema);