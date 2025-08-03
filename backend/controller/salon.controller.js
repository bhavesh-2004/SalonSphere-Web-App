import Salon from "../model/salon.model.js";

export const getSalon=async(req,res) =>{
    try {
        const salon=await Salon.find()
        res.status(200).json(salon)
    } catch (error) {
        console.log("Error:",error);
        res.status(500).json(error);
        
    }
}