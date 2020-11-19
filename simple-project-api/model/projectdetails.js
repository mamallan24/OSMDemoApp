const mongoose = require("mongoose");

var ProjectDetails = mongoose.model('ProjectInfo', {
    projectId:{type: Number},
    projectName: { type: String },
    projectDesc: { type: String },
});

module.exports = { ProjectDetails };