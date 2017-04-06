/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var mongoose = require('mongoose');
var socket = null;


var profileSchema = mongoose.Schema({
    info: {
        firstName:String,
        lastName:String
    },
    media: {
        profileImage:String,
        coverImage:String
    },
    listeners:[{
        token:String
    }]
});



profileSchema.methods.nameChange = function(callback){
    var profile = this;
    var io = null;
    this.listeners.forEach(function(listener){
        io.to(listener.token).emit("on profile name change", profile);
    });
};



var Profile = mongoose.model('Profile', profileSchema);

module.exports = Profile;