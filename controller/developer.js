/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


var Developer = require('../model/developer');
var jwt = require('jsonwebtoken');
var dbConfig = require('../config/database');


exports.findAll = function(req, res){
    Developer.find({}, function(err, developers){
        if (err) throw err;
        var response = {
            action:'find',
            status:'success',
            dataType:'developers',
            data:developers
        };
        res.json(response);
    });
};


exports.findById = function(req, res){
    var id = req.params.developerId;
    var query = {_id:id};
    Developer.find(query, function(err, developer){
       if (err) throw err;
       if(developer){
            var response = {
                action:'find',
                status:'success',
                dataType:'developer',
                data:developer
            };
            res.json(response);
       }
       else{
           var error = {
               action:'find',
               status:'failed',
               reason:"account with the provided ID doesn't exist",
               _id:id
           };
           res.json(error);
       }
       
    });
};


var Developer = require("../model/developer");


exports.findByIds = function(req, res){
    var developerIds = req.params.developerIds;
    Developer.findByIds(developerIds, function(err, developers){
        if(err){
            
        }
        else if(!developers){
            
        }
        else{
            
        }
    });
};

exports.findByUserId = function(req, res){
    var userId = req.params.userId;
    Developer.findByUserId(userId, function(err, developers){
        if(err){
            
        }
        else if(!developers){
            
        }
        else{
            
        }
    });
};

exports.findByUserIds = function(req, res){
    var userIds = req.params.userIds;
    Developer.findByUserIds(userIds, function(err, developers){
        if(err){
            
        }
        else if(!developers){
            
        }
        else{
            
        }
    });
};

exports.findByProximity = function(req, res){
    var userId = req.params.userId;
    Developer.findById(userId, function(err, developer){
        if(err){
            
        }
        else if(!developer){
            
        }
        else{
            
        }
    });
};

exports.findByProximityZero = function(req, res){
    var userId = req.params.userId;
    Developer.findByProximityZero(userId, function(err, developers){
        if(err){
            
        }
        else if(!developers){
            
        }
        else{
            
        }
    });
};

exports.findByProximityFirst = function(req, res){
    var userId = req.params.userId;
    Developer.findByProximityFirst(userId, function(err, developers){
        if(err){
            
        }
        else if(!developers){
            
        }
        else{
            
        }
    });
};

exports.findByProximitySecond = function(req, res){
    var userId = req.params.userId;
    Developer.findByProximitySecond(userId, function(err, developers){
        if(err){
            
        }
        else if(!developers){
            
        }
        else{
            
        }
    });
};

exports.findByProximityThird = function(req, res){
    var userId = req.params.userId;
    Developer.findByProximityThird(userId, function(err, developers){
        if(err){
            
        }
        else if(!developers){
            
        }
        else{
            
        }
    });
};


exports.findMyProximity = function(req, res){
    var userId = req.user._id;
    Developer.findById(userId, function(err, developer){
        if(err){
            
        }
        else if(!developer){
            
        }
        else{
            
        }
    });
};

exports.findMyProximityZero = function(req, res){
    var userId = req.user._id;
    Developer.findByProximityZero(userId, function(err, developers){
        if(err){
            
        }
        else if(!developers){
            
        }
        else{
            
        }
    });
};

exports.findMyProximityFirst = function(req, res){
    var userId = req.user._id;
    Developer.findByProximityFirst(userId, function(err, developers){
        if(err){
            
        }
        else if(!developers){
            
        }
        else{
            
        }
    });
};

exports.findMyProximitySecond = function(req, res){
    var userId = req.user._id;
    Developer.findByProximitySecond(userId, function(err, developers){
        if(err){
            
        }
        else if(!developers){
            
        }
        else{
            
        }
    });
};

exports.findMyProximityThird = function(req, res){
    var userId = req.user._id;
    Developer.findByProximityThird(userId, function(err, developers){
        if(err){
            
        }
        else if(!developers){
            
        }
        else{
            
        }
    });
};


exports.findSelectedProximity = function(req, res){
    var userId = req.params.userId;
    Developer.findById(userId, function(err, developer){
        if(err){
            
        }
        else if(!developer){
            
        }
        else{
            
        }
    });
};

exports.findSelectedProximityZero = function(req, res){
    var userId = req.params.userId;
    Developer.findByProximityZero(userId, function(err, developers){
        if(err){
            
        }
        else if(!developers){
            
        }
        else{
            
        }
    });
};

exports.findSelectedProximityFirst = function(req, res){
    var userId = req.params.userId;
    Developer.findByProximityFirst(userId, function(err, developers){
        if(err){
            
        }
        else if(!developers){
            
        }
        else{
            
        }
    });
};

exports.findSelectedProximitySecond = function(req, res){
    var userId = req.params.userId;
    Developer.findByProximitySecond(userId, function(err, developers){
        if(err){
            
        }
        else if(!developers){
            
        }
        else{
            
        }
    });
};

exports.findSelectedProximityThird = function(req, res){
    var userId = req.params.userId;
    Developer.findByProximityThird(userId, function(err, developers){
        if(err){
            
        }
        else if(!developers){
            
        }
        else{
            
        }
    });
};



exports.findAllProximity = function(req, res){
    var userId = req.params.userId;
    Developer.findById(userId, function(err, developer){
        if(err){
            
        }
        else if(!developer){
            
        }
        else{
            
        }
    });
};

exports.findAllProximityZero = function(req, res){
    var userId = req.params.userId;
    Developer.findByProximityZero(userId, function(err, developers){
        if(err){
            
        }
        else if(!developers){
            
        }
        else{
            
        }
    });
};

exports.findAllProximityFirst = function(req, res){
    var userId = req.params.userId;
    Developer.findByProximityFirst(userId, function(err, developers){
        if(err){
            
        }
        else if(!developers){
            
        }
        else{
            
        }
    });
};

exports.findAllProximitySecond = function(req, res){
    var userId = req.params.userId;
    Developer.findByProximitySecond(userId, function(err, developers){
        if(err){
            
        }
        else if(!developers){
            
        }
        else{
            
        }
    });
};

exports.findAllProximityThird = function(req, res){
    var userId = req.params.userId;
    Developer.findByProximityThird(userId, function(err, developers){
        if(err){
            
        }
        else if(!developers){
            
        }
        else{
            
        }
    });
};



exports.create = function(req, res){
    var appName = req.body.appName;
    if(appName){
        var accessType = req.body.accessType || "super_gold";
        var developer = new Developer({
           appName:appName,
           accessType:accessType
        });
        developer.save(function(err, developer){
            if(err) throw err;
            developer.appKey = jwt.sign({id: developer._id}, dbConfig.secret);
            developer.save(function(err, developer){
                if(err) throw err;
                var response = {
                    action:'create',
                    status:'success',
                    dataType:'developer',
                    data:developer
                };
                res.json(response);
            });
        });
    }
    else{
        res.json({
            action: 'create',
            status: 'failed',
            reason: 'appName is empty',
            appName:appName
        });
    }
};


exports.update = function(req, res){
    var appId = req.params.developerId;
    var newDeveloper = req.body;
    if(appId){
        Developer.findById(appId, function(err, developer){
            if(err) throw err;
            if(developer){
                developer.accessType = newDeveloper.accessType;
                developer.appName = newDeveloper.appName;
                developer.appKey = newDeveloper.appKey;
                developer.save(function(err, developer){
                    if(err) throw err;
                    var response = {
                        action:'developer',
                        status:'success',
                        data:developer,
                        dataType:'developer'
                    };
                    res.json(response);
                });
            }
            else{
                var error = {
                    action:"update",
                    status:"error",
                    reason:"account with the ID doesn't exist"
                };
                res.json(error);
            }
        });
    }
    else{
        var error = {
            action:"update",
            status:"error",
            reason:"app id is empty"
        };
        res.json(error);
    }
};


exports.delete = function(req, res){
    var appId = req.params.developerId;
    if(appId){
        Developer.remove({_id:appId}, function(err, result){
            if(err) throw err;
            result.action = "delete";
            result.status = "success";
            res.json(result);
        });
    }
    else{
        res.json({
            action:'delete',
            status:"failed",
            reason:"app id is empty"
        });
    }
};

