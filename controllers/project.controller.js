const Project = require("../models/project.model");
const { RESPONSE } = require("../utils/constants");

// Add a new user
exports.addProject = async (req, res) => {
  try {
    const { name, description, companyId, userIds } = req.body;

    // Validate required fields
    if (!name || !description || !companyId || !userIds) {
      return res.status(RESPONSE.STATUS.BAD_REQUEST).json({ message: "All fields are required." });
    }

    const newProject = new Project({
        name, 
        description,
        companyId,
        userIds
    });

    const savedProject = await newProject.save();
    res.status(RESPONSE.STATUS.CREATED).json(savedProject);
  } catch (error) {
    res.status(RESPONSE.STATUS.INTERNAL_SERVER_ERROR).json({ message: RESPONSE.MESSAGE.INTERNAL_SERVER_ERROR, error: error.message });
  }
};