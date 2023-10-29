const mongoose = require('mongoose');

// Create a schema for the student details
const studentSchema = new mongoose.Schema({
  rollnumber: { type: String, required: true },
  email: { type: String, required: true },
  name: { type: String, required: true },
  phoneNumber: { type: Number, required: true },
  parentsPhoneNumber: { type: Number, required: true },
  course: { type: String, required: true },
  yearOfStudy: { type: Number, required: true },
  password: { type: String, required: true }
});


// Create a model based on the schema
const student_details = mongoose.model('Student_detail', studentSchema);

module.exports = student_details; // Export the model for use in other files
