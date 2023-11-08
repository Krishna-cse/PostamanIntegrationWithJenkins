// models/students.js
import mongoose from "mongoose";
import validator from "validator";
//const { isEmail } = validator;

const studentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 3,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    validate: {
        validator: (value) => validator.isEmail(value), // Use 'validator.isEmail'
        message: "Invalid Email",
    },
  },
  phone: {
    type: Number,
    min: 10,
    required: true,
    unique: true,
  },
  address: {
    type: String,
    required: true,
  },
});

const Student = mongoose.model("Student", studentSchema);

export default Student;
