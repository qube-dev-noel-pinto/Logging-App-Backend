const Log = require("../models/log.model");
const { RESPONSE } = require("../utils/constants");

// Add a new user
exports.addLog = async (req, res) => {
  try {
    const { message, level, timestamp, projectId, userId, companyId } = req.body;

    // Validate required fields
    if (!message || !level || !projectId ||!userId ||!companyId) {
      return res.status(RESPONSE.STATUS.BAD_REQUEST).json({ message: "All fields are required." });
    }

    const newLog = new Log({
        message, 
        level,
        timestamp,
        projectId,
        userId,
        companyId
    });

    const savedLog = await newLog.save();
    res.status(RESPONSE.STATUS.CREATED).json(savedLog);
  } catch (error) {
    res.status(RESPONSE.STATUS.INTERNAL_SERVER_ERROR).json({ message: RESPONSE.MESSAGE.INTERNAL_SERVER_ERROR, error: error.message });
  }
};