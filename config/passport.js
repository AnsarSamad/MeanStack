var express = require('express');
var router = express.Router();
var LocalStrategy = require('passport-local').Strategy;
var User = require('../model/user')
var passport = require('passport');
var dbUtil = require('../db/DBUtil');

module.exports = function (passport) {
    passport.use('local', new LocalStrategy(
        {
            usernameField: 'email',
            passwordField: 'password'
        },
        function (username, password, callback) {
            User.findOne({ local: { email: username, password: password } }, function (err, response) {
                var isadmine = false;
                if ((err != null && err) || response == null) {
                    var obj = { isvalid: false }
                    return callback(null, obj); // user not exist
                } else {
                    //identify weather this user is a admin user or not                
                    if (typeof response.isadmine != 'undefined' && response.isadmine == "true") {
                        isadmine = true;
                    }
                    var obj = { isvalid: true, isadmin: isadmine, userID: response._id }
                    return callback(null, obj); //user exist //isadmin
                }
            })
        }

    ));



}