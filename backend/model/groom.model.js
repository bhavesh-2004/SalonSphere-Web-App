import mongoose from "mongoose";

const groomSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: String,
  includes: [String], // Array of services included
  memberPrice: String,
  image: String
});

const Groom = mongoose.model("Groom", groomSchema);

export default Groom;
