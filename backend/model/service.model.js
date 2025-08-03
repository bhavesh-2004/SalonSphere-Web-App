import mongoose from 'mongoose';

const serviceSchema = new mongoose.Schema({
  title: String,
  image: String,
  link: String
});

const Service1 = mongoose.model("Service", serviceSchema);

export default Service1;
