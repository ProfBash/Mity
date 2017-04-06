/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var mongoose = require("mongoose");


var logSchema = mongoose.Schema({
    userId:String,
    logs:[{
        action:String,
        time:Date
    }],
    listeners:[{
       userId:String 
    }]
});


logSchema.statics.addById = function(userId, log, callback){
    this.findAndUpdate(
        {userId:userId},
        {$push: {logs:log}},
        {safe: true, upsert: true, new : true},
        callback
    );
};



var Log = logSchema.model('Log', logSchema);

module.exports = Log;