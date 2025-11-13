import mongoose from "mongoose";

const pamperPackageSchema = new mongoose.Schema({
  title: String,
  description: String,
  includes: [String], // Array of strings
  memberPrice: String,
  image: String
});

const PamperPackage = mongoose.model("PamperPackage", pamperPackageSchema);

export default PamperPackage;
