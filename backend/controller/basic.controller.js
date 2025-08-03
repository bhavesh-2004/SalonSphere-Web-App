import BasicCut from "../model/basic.model.js";

export const getBasicCuts = async (req, res) => {
  try {
    const basicCuts = await BasicCut.find();
    res.status(200).json(basicCuts);
  } catch (error) {
    console.error("Error", error);
    res.status(500).json(error);
  }
};
