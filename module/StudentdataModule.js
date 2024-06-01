const mongoose = require('mongoose');

// Define the schema
const studentSchema = new mongoose.Schema({
    name: String,
    surname: String,
    rollnumber:Number,
    phonenumber: Number
});

// Create the model
const Student = mongoose.model('Student', studentSchema);

module.exports = Student;
