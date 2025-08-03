import mongoose from "mongoose";

const hairColorSchema = new mongoose.Schema({
  title: String,
  description: String,
  memberPrice: String,
  image: String
});

const HairColor = mongoose.model("HairColor", hairColorSchema);

export default HairColor;
