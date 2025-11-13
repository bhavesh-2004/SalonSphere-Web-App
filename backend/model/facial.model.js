import mongoose from "mongoose";

const facialSchema = new mongoose.Schema({
  title: String,
  description: String,
  memberPrice: String,
  image: String
});

const Facial = mongoose.model("Facial", facialSchema);

export default Facial;
