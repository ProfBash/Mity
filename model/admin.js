/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var mongoose = require("mongoose");


var adminSchema = mongoose.Schema({
    userId:String
});



var Admin = mongoose.model("Admin", adminSchema);

module.exports = Admin;