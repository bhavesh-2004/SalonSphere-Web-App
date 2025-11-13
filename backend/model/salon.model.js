import mongoose from "mongoose";

const salonSchema = mongoose.Schema({
    name:String,
    title:String,
    price:Number,
    image:String,
    category:String,
    rating:Number
})
const Salon=mongoose.model("Salon",salonSchema);

export default Salon;