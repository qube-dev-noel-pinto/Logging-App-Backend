const mongoose = require("mongoose");

const logSchema = new mongoose.Schema({
    message: { type: String, required: true },
    level: {
        type: String,
        enum: ['INFO', 'WARNING', 'ERROR'],
        required: true
    },
    timestamp: { type: Date, default: Date.now },
    projectId: { type: mongoose.Schema.Types.ObjectId, ref: 'Project', required: true },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    companyId: { type: mongoose.Schema.Types.ObjectId, ref: 'Company', required: true },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
});

const Log = mongoose.model("Log", logSchema);
module.exports = Log;
