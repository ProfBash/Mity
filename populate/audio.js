/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var Audio = require('../model/audio');
var User = require('../model/user');
var faker = require('faker');

var app = require('express')();



function generateAudio(userId){
    var audio = new Audio({
        userId:userId,
        length:faker.random.number(),
        src:faker.internet.url(),
        coverImage:faker.image.abstract(),
        description:faker.lorem.sentence(),
        title:faker.lorem.words()
    });
    audio.save(function(err, audio){
        if(err) throw err;
        else {
            console.log(audio);
        }
    });
}

app.get('/', function(req, res){
    User.find({}, function(err, users){
        if (err) throw err;
        if(users.length !== 0){
            for(var k = 0; k < users.length; k++){
                for(var i = 0; i < 10; i++){
                    generateAudio(users[k]._id);
                }
            };
        }
            
    });
    res.status(200).send("done");
});


module.exports = app;