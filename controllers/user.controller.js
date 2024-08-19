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

// Get user details by email
exports.getUserDetails = async (req, res) => {
  try {
    const { email } = req.body;

    if (!email) {
      return res.status(RESPONSE.STATUS.BAD_REQUEST).json({ status: false, message: "Email is required." });
    }

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(RESPONSE.STATUS.OK).json({ status: true, message: RESPONSE.MESSAGE.USER_NOT_FOUND });
    }

    res.status(RESPONSE.STATUS.OK).json({status: true, message: RESPONSE.MESSAGE.ACCEPTED, data: user});
  } catch (error) {
    res.status(RESPONSE.STATUS.INTERNAL_SERVER_ERROR).json({ status: true, message: RESPONSE.MESSAGE.INTERNAL_SERVER_ERROR, error: error.message });
  }
};