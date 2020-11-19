const express = require('express');
var router = express.Router();
var mongoose = require('mongoose')
var ObjectId = require('mongoose').Types.ObjectId;
mongoose.set('useFindAndModify', false);
var { SiteDetails } = require('../model/siteDetails');

router.get('/', (req, res) => {
    SiteDetails.find((err, docs) => {
        if (!err) { res.send(docs); }
        else { console.log('Error in Retriving SiteDetails :' + JSON.stringify(err, undefined, 2)); }
    });
});

router.get('/:id', function(req, res, next) {
    SiteDetails.find({"projectId" :req.params.id}
        , function (err, post) {
      if (err) return next(err);
      res.json(post);
    });
  });
  
router.post('/addSiteInfo', (req, res) => {
    var site = new SiteDetails({
        projectId: req.body.projectId,
        projectName: req.body.projectName,
        siteName: req.body.siteName,
        lat: req.body.lat,
        long: req.body.long,
    });
    site.save((err, doc) => {
        if (!err) { res.status(200).send(doc); }
        else { console.log('Error in Site Details Save :' + JSON.stringify(err, undefined, 2)); }
    });
    
});

router.put('/:id', (req, res) => {
    if (!ObjectId.isValid(req.params.id))
        return res.status(400).send(`No record with given id : ${req.params.id}`);

        var site = {
            projectId: req.body.projectId,
            projectName: req.body.projectName,
            siteName: req.body.siteName,
            lat: req.body.lat,
            long: req.body.long,
        };

        SiteDetails.findByIdAndUpdate(req.params.id, { $set: site }, { new: true }, (err, doc) => {
        if (!err) { res.send(doc); }
       else { console.log('Error in Site Details Update :' + JSON.stringify(err, undefined, 2)); }
   });
 });


//  router.get('/getSiteInfo', (req, res) => {
//     SiteDetails.find((err, docs) => {
//         if (!err) { res.send(docs); }
//         else { console.log('Error in Retriving GetSiteInfo :' + JSON.stringify(err, undefined, 2)); }
//     });
// });

module.exports = router;