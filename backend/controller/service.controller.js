import Service from "../model/service.model.js";

export const getServices = async (req, res) => {
  try {
    const services = await Service.find();
    res.status(200).json(services);
  } catch (error) {
    console.error("Error", error);
    res.status(500).json(error );
  }
};
