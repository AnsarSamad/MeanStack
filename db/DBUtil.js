var express = require('express');

var User = require('../model/user');

// function to validate user
// username may be email

function isUserExist(username,password){

    return new Promise(function(resolve,reject){
        User.findOne({local:{email:username,password:password}},function(err,response){
            console.log('response in DBUtil isUSerExxist :'+response);
            if(err || response == null || typeof response == 'undefined'){
                reject(false); // user not exist
            } else{
                resolve(true); //user exist
            }
        })
    })


}

function addLocalUser(username, password, isadmin) {
    console.log('adding new user:'+username+' isadmin:'+isadmin)
     var localUser = new User({local:{ email:username,password:password},isadmin:isadmin })       
     return new Promise(function(resolve,reject){
        localUser.save(function(err,user){
            if(err){
               reject(false)
            }else{
                resolve(user);
            }
        });
     });  
        
}

// function createLocalUser(username,password){
//    new Promise(function(resolve,reject){
//         isUserExist(username,password)
//         .then(function(user){
//             console.log('user exist return false')
//             return false;
//         },function(noUserExist){
//             console.log('user not exist , adding new user')
//             return addLocalUser(username,password);
//         })
//         .catch(function(err){
//             console.log('error occured');
//             return false;
//         })
//     });

// }




module.exports = {
    addLocalUser : addLocalUser,
    isUserExist : isUserExist
}