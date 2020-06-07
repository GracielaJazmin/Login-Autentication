const {Schema, model} = require('mongoose');

const UserSchema = new Schema({
    user:String,
    password:String
}, {
    timestamps:true
});

module.exports = model('User', UserSchema);

