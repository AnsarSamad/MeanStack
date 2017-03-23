var express = require('express');
var router = express.Router();
var passport = require('passport');
var User = require('../model/user');
var dbUtil = require('../db/DBUtil');

// //dfine strategy
var strategy = require('../config/passport')(passport);


//service for login
router.post('/login',function(req,res,next){
    console.log('post request for login validation:'+req.body.email)
    try{
        passport.authenticate('local',function(err,isExist,isadmine) {
            console.log('response from strategy isExist :'+isExist)    
            res.status(200);
            res.contentType('json');
            res.send({isvalid:isExist,isadmin:isadmine});
        })(req, res, next);
    }catch(e){
        console.log('Error :'+e)
         res.send({isvalid:false});
    }
    
})

// service for adding new user
router.post('/register',function(req,res,next){
    var email = req.body.email;
    var password=req.body.password;
    var isadmin=req.body.isadmin;
    if(typeof isadmin == 'undefined' || isadmin != "true"){
        isadmin="false";
    }
        
console.log(`am in validator ${email} ${password}`)
    dbUtil.isUserExist(email,password)
    .then((userexist)=>{        
        return false
    },(usernotexist)=>{
        return dbUtil.addLocalUser(email,password,isadmin);
    })

    .then((useradded)=>{
        console.log('is user added :'+useradded);
        res.json({success : useradded});           
    },(usernotadded)=>{
        console.log('user not added :'+usernotadded);
        res.json({success : usernotadded});      
    })

    .catch(function(er){
        console.log('error occured');
        res.json({success:false,message:'error occured in register service'})
    })

});
   
module.exports = router;