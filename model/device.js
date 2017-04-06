/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var mongoose = require('mongoose');


var deviceSchema = mongoose.Schema({
    userId:String,
    macAddress:{
        type:String, unique:true
    },
    type:String,
    maker:String
});



deviceSchema.statics.convertToIds = function(devices, callback){
    var macAddresses = devices.macAddresses;
    this.find({macAddress:{$in: macAddresses}}, function(err, devices){
        if(err) return callback(err);
        return callback(null, devices.userId);
    });
};


var Device = mongoose.model('Device', deviceSchema);

module.exports = Device;