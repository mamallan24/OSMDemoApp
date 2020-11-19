const mongoose = require("mongoose");

var SiteDetails = mongoose.model('SiteInfo', {
    projectId:{type: Number},
    projectName: { type: String },
    siteName: { type: String },
    lat: { type: Number },
    long: { type: Number }
    //_id:{type:String}
});

module.exports = { SiteDetails };