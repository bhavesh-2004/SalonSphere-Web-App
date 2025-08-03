import Facial from "../model/facial.model.js";

export const getFacials = async (req, res) => {
  try {
    const facials = await Facial.find();
    res.status(200).json(facials);
  } catch (error) {
    console.error("Error", error);
    res.status(500).json(error);
  }
};
