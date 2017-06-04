var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var User = require('../model/user');


router.get('/', (req, res, next) => {
    console.log('get request for get all users')
    User.find({}).exec((err, response) => {
        if (err) {
            console.log('Error occured');
        } else {
            console.log('sending response back :' + response);
            res.json(response)
        }
    })
})

router.post('/activate', (req, res, next) => {
    const userId = req.body.userId;
    console.log('got request for activate user :' + userId);
    User.update({ _id: userId }, { $set: { isactive: true } }, (response) => {
        res.json({ success: true });
    });
})

module.exports = router; 