/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var User = require('../model/user');
var faker = require('faker');
var app = require('express')();


function generateUser(req, res){
    return new User({
        local:{
            username:faker.internet.userName(),
            password:faker.internet.password()
        }
    }).save(function(err, user){
        if(err) throw err;
        else {
            console.log(user);
        }
    });
}

app.get('/', function(req, res){
    for(var i = 0; i < 100; i++){
        generateUser(req, res);
        if( i === 99) res.status(200).send("done");
    }
    
});


module.exports = app;

