const User = require("../models/user.model");
const { RESPONSE } = require("../utils/constants");

// Add a new user
exports.addUser = async (req, res) => {
  try {
    const { email, name, role, companyId } = req.body;

    // Validate required fields
    if (!email || !name || !role || !companyId) {
      return res.status(RESPONSE.STATUS.BAD_REQUEST).json({ message: "All fields are required." });
    }

    const newUser = new User({
      email,
      name,
      role,
      companyId
    });

    const savedUser = await newUser.save();
    res.status(RESPONSE.STATUS.CREATED).json(savedUser);
  } catch (error) {
    res.status(RESPONSE.STATUS.INTERNAL_SERVER_ERROR).json({ message: RESPONSE.MESSAGE.INTERNAL_SERVER_ERROR, error: error.message });
  }
};