/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var mongoose = require('mongoose');
var secretGen = require('rand-token').uid;
var idGen = require('rand-token').suid;
var jwt = require("jsonwebtoken");

var SECRET_LENGTH = 16;
var ID_LENGTH = 20;


var developerSchema = mongoose.Schema({
    appName:String,
    appId:String,
    appKey:String,
    appSecret:String,
    accessType:String
});


developerSchema.methods.genAndSave = function(callback){
    var developer = this;
    var appSecret = secretGen(SECRET_LENGTH);
    var appId = idGen(ID_LENGTH);
    var accessType = developer.accessType;
    var appName = developer.appName;
    var appKey = jwt.sign({appId:appId, appName:appName, accessType:accessType}, appSecret);
    
    developer.appKey = appKey;
    developer.appId = appId;
    developer.appSecret = appSecret;
    
    return this.save(callback);
};


developerSchema.methods.create = function(callback){
    var developer = this.model('Developer');
    return developer.genAndSave(callback);
};


developerSchema.statics.findByKeyAndSecret = function(key, secret, callback){
    return this.findOne({appKey:key, appSecret:secret}, callback);
};


var Developer = mongoose.model('Developer', developerSchema);
module.exports = Developer;
