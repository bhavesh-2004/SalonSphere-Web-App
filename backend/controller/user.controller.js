import User from "../model/user.model.js";

export const createBooking = async (req, res) => {
  try {
    const {
      fullName,
      phone,
      email,
      preferredOffer,
      appointmentDate,
      appointmentTime,
      city
    } = req.body;

    // Check if user with the same email already exists
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    // Create new user booking
    const newUser = new User({
      fullName,
      phone,
      email,
      preferredOffer,
      appointmentDate,
      appointmentTime,
      city
    });

    await newUser.save();

    res.status(201).json({ message: "Booking confirmed successfully" });
  } catch (error) {
    console.error("Error:", error.message);
    res.status(500).json({ message: "Internal server error" });
  }
};
