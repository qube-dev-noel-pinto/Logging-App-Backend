const userService = require('../services/userService');
const { HTTP_STATUS, RESPONSE_MESSAGES } = require('../utils/constants');

// Controller to handle user creation
const createUser = async (req, res) => {
  try {
    const { email } = req.body;

    // Validate email presence
    if (!email) {
      return res.status(HTTP_STATUS.BAD_REQUEST).send({
        message: 'Email is required.'
      });
    }

    const newUser = await userService.createUser(email);
    res.status(HTTP_STATUS.CREATED).send({
      message: RESPONSE_MESSAGES.CREATED,
      userData: newUser
    });
  } catch (error) {
    res.status(HTTP_STATUS.INTERNAL_SERVER_ERROR).send({
      message: error.message
    });
  }
};

module.exports = {
  createUser
};
