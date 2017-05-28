var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Feature = require('../model/feature');


router.get('/', (req, res, next) => {
    console.log('get request for get all features')
    Feature.find({}).exec((err, response) => {
        if (err) {
            console.log('Error occured');
        } else {
            res.json(response)
        }
    })
})


router.post('/', (req, res) => {
    console.log('got a Post request to add new user feature')
    var id = req.body.feature._id;
    var mode = req.body.mode;
    if (mode != "delete") {
        //This approach involves first retrieving the document from Mongo, then issuing an update command (triggered by calling save).
        Feature.findById(id, function (err, feature) {
            if (err) return handleError(err);
            console.log('feature found :' + JSON.stringify(feature));
            if (mode == "insert" && feature == null) { // confirm its a new object
                var feature = new Feature();
            }
            feature.title = req.body.feature.title;
            feature.descr = req.body.feature.descr;
            feature.created = req.body.feature.created;
            feature.modified = req.body.feature.modified;
            feature.area = req.body.feature.area;
            feature.userstory = req.body.feature.userstory;
            if (typeof req.body.feature.createdby == 'undefined') {
                feature.createdby = null;
            } else {
                feature.createdby = req.body.feature.createdby;
            }
            console.log('saving feature :' + JSON.stringify(feature));
            feature.save(function (err, updatedFeature) {
                if (err) {
                    console.log('error :' + err);
                    res.send(err)
                };
                res.send(updatedFeature);
            });
        });

    } else { // delete feature
        Feature.remove({ _id: id }, function (err) {
            console.log('removed feature :err :' + err);
            if (err) return err;
            res.send(true);
        });
    }

});

module.exports = router; 