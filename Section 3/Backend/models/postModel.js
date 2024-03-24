const {Schema, model} = require('.../connection');

const mySchema = new Schema({
    title: {type : String, required : true},
    image : String,
    username : String,
    postedOn : Date,
    likes : {type : Number, default : 0},
    shares : {type : Number, default : 0}
});
//postCollection is the name of document collection in db
module.exports = model('postCollection', mySchema);
