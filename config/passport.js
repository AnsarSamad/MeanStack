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
            
            console.log('passport fetched user details :'+response._id)
            var isadmine=false;
            if(err || response == null){
                var obj = {isvalid:false,isadmin:isadmine,userID:response._id}
                return callback (null,obj); // user not exist
            } else{
                //identify weather this user is a admin user or not                
                if(typeof response.isadmine != 'undefined' && response.isadmine == "true" ){
                    isadmine=true;
                }
                console.log('response._id:'+response._id);
                var obj = {isvalid:true,isadmin:isadmine,userID:response._id}
                return callback(null,obj); //user exist //isadmin
            }
        })
    }

));



}