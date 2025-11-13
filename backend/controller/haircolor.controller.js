import HairColor from "../model/haircolor.model.js";

export const getHairColors = async (req, res) => {
  try {
    const hairColors = await HairColor.find();
    res.status(200).json(hairColors);
  } catch (error) {
    console.error("Error", error);
    res.status(500).json(error);
  }
};
