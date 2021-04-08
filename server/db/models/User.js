const mongoose= require('mongoose');

const userSchema = new mongoose.Schema({
    fName: String,
    lName: String,
    email: String,
    password: String,
    phoneNumber: Number
});

module.exports = mongoose.model("User", userSchema)