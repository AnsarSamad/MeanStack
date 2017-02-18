var express = require('express');
var router = express.Router();
var LocalStrategy = require('passport-local').Strategy;
var User = require('../model/user')
var passport = require('passport');
var dbUtil = require('../db/DBUtil');

module.exports = function(passport){
console.log('am in passport confg')
passport.use('local',new LocalStrategy(
    {
        usernameField:'email',
        passwordField:'password'
    },
    function(username, password, callback) {
        console.log('strategy function get called')
        console.log('email :'+username);
        console.log('password :'+password);
        User.findOne({local:{email:username,password:password}},function(err,response){
            if(err || response == null){
                return callback (null,false); // user not exist
            } else{
                return callback(null,true); //user exist
            }
        })
    }

));



}