const express = require('express');
var router = express.Router();
var mongoose = require('mongoose')
var ObjectId = require('mongoose').Types.ObjectId;
mongoose.set('useFindAndModify', false);
var { ProjectDetails } = require('../model/projectdetails');

router.get('/', (req, res) => {
    ProjectDetails.find((err, docs) => {
        if (!err) { res.send(docs); }
        else { console.log('Error in Retriving ProjectDetails :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.post('/', (req, res) => {
    var project = new ProjectDetails({
        projectId: Math.random(),
        projectName: req.body.projectName,
        projectDesc: req.body.projectDesc,
    });
    project.save((err, doc) => {
        if (!err) { res.status(200).send(doc); }
        else { console.log('Error in Project Details Save :' + JSON.stringify(err, undefined, 2)); }
    });
    
});


module.exports = router;