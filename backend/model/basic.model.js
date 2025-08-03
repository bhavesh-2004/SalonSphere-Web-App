import mongoose from "mongoose";

const basicCutSchema = new mongoose.Schema({
  title: String,
  description: String,
  memberPrice: String,
  image: String
});

const BasicCut = mongoose.model("BasicCut", basicCutSchema);

export default BasicCut;
