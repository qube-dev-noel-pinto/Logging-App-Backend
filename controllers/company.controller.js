const Company = require("../models/company.model");

// Add a new company
exports.addCompany = async (req, res) => {
  try {
    const { name, domain } = req.body;

    // Validate required fields
    if (!name || !domain) {
      return res.status(400).json({ message: "Name and domain are required." });
    }

    const newCompany = new Company({
      name,
      domain
    });

    const savedCompany = await newCompany.save();
    res.status(201).json(savedCompany);
  } catch (error) {
    res.status(500).json({ message: "Server Error", error: error.message });
  }
};
