import mongoose from "mongoose";

const hairSetSchema = new mongoose.Schema({
  title: String,
  description: String,
  includes: [String],
  memberPrice: String,
  image: String
});

const HairSet = mongoose.model("HairSet", hairSetSchema);

export default HairSet;
