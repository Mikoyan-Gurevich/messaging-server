'use strict';

var db = require('./db');

var user = {
    createUser : function(userDetails, cb){
        console.log("user details received: ", userDetails);
		var dbQuery = "INSERT INTO user (first_name, last_name, email, mobile, password, is_active, is_enabled) VALUES ('" + userDetails.first_name + "', '" + userDetails.last_name + "', '" + userDetails.email + "', " + userDetails.mobile + ", '" + userDetails.password + "', 1, 1);";
        db.query(dbQuery, function(e,r){
            if(e){return cb(e);}
            cb(null, r);
        });
    } 
};

module.exports = user;
