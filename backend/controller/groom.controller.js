import Groom from "../model/groom.model.js";

export const getGroomPackages = async (req, res) => {
  try {
    const groomPackages = await Groom.find();
    res.status(200).json(groomPackages);
  } catch (error) {
    console.error("Error fetching grooming packages:", error);
    res.status(500).json({ message: "Internal server error", error });
  }
};
