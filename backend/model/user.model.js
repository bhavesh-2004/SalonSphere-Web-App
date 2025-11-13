import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
    trim: true,
  },
  phone: {
    type: String,
    required: true,
    match: [/^\d{10}$/, 'Phone number must be 10 digits'],
  },
  email: {
    type: String,
    required: true,
    lowercase: true,
    trim: true,
  },
  preferredOffer: {
    type: String,
    required: true,
    enum: [
      "Haircut",
      "Facial",
      "Beard Trim",
      "Haircut+Beard Trim",
      "Gold Facial",
      "Hair Setting",
      "Haircolor"
    ],
  },
  appointmentDate: {
    type: String,
    required: true,
    match: [/^\d{2}-\d{2}-\d{4}$/, 'Date must be in dd-mm-yyyy format'],
  },
  appointmentTime: {
    type: String,
    required: true,
    match: [/^(0[1-9]|1[0-2]):[0-5][0-9] (AM|PM)$/, 'Time must be in hh:mm AM/PM format'],
  },
  city: {
    type: String,
    required: true,
    trim: true,
  },
}, {
  timestamps: true
});

const User = mongoose.model("User", userSchema);

export default User;
