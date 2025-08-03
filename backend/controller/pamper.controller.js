import PamperPackage from "../model/pamper.model.js";

export const getPamperPackages = async (req, res) => {
  try {
    const pamperPackages = await PamperPackage.find();
    res.status(200).json(pamperPackages);
  } catch (error) {
    console.error("Error", error);
    res.status(500).json(error);
  }
};
