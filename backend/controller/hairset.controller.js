import HairSet from "../model/hairset.model.js";

export const getHairSets = async (req, res) => {
  try {
    const hairSets = await HairSet.find();
    res.status(200).json(hairSets);
  } catch (error) {
    console.error("Error", error);
    res.status(500).json( error );
  }
};
