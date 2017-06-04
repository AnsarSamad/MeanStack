var express = require('express');

var User = require('../model/user');

// function to validate user
// username may be email

function isUserExist(username, password) {

    return new Promise(function (resolve, reject) {
        User.findOne({ local: { email: username, password: password } }, function (err, response) {
            if (err || response == null || typeof response == 'undefined') {
                reject(false); // user not exist
            } else {
                resolve(true); //user exist
            }
        })
    })


}

function addLocalUser(username, password) {
    var localUser = new User();
    localUser.isadmine = false;
    localUser.isactive = false;
    localUser.local.email = username;
    localUser.local.password = password;

    return new Promise(function (resolve, reject) {
        localUser.save(function (err, user) {
            if (err) {
                reject(false)
            } else {
                resolve(user);
            }
        });
    });
}

module.exports = {
    addLocalUser: addLocalUser,
    isUserExist: isUserExist
}