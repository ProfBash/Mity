/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var mongoose = require('mongoose');
var AccessToken = require('./accessToken');



var userSchema = mongoose.Schema({
    local: {
        username:String,
        password:String
    },
    facebook: String
});


userSchema.methods.genAccessTokenAndSave = function(callback){
    var user = this;
    var accessToken = new AccessToken({userId:user._id});
    return accessToken.genSecretTokenAndSave(function(err, accessToken){
        callback(err, user, accessToken);
    });
};

userSchema.methods.create = function(callback){
    var user = this;
    return user.save(function(err, user){
        if(err) callback(err);
        user.genAccessTokenAndSave(callback);
    });
};


var User = mongoose.model('User', userSchema);
module.exports = User;

