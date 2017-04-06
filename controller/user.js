/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var User = require('../model/user');




exports.findAll = function(req, res){
    User.find({}, function(err, users){
        if(err) throw err;
        users.action = "findAll";
        users.status = "success";
        res.json(users);
    });
};


exports.findById = function(req, res){
    var id = req.params.userId;
    if(id){
        User.find({_id:id}, function(err, user){
            if(err) throw err;
            user.action = "findOne";
            user.status = "success";
            res.json(user);
        });
    }
};



exports.findByIds = function(req, res){
    var userIds = req.params.userIds;
    User.findByIds(userIds, function(err, users){
        if(err){
            
        }
        else if(!users){
            
        }
        else{
            
        }
    });
};

exports.findByUserId = function(req, res){
    var userId = req.params.userId;
    User.findByUserId(userId, function(err, users){
        if(err){
            
        }
        else if(!users){
            
        }
        else{
            
        }
    });
};

exports.findByUserIds = function(req, res){
    var userIds = req.params.userIds;
    User.findByUserIds(userIds, function(err, users){
        if(err){
            
        }
        else if(!users){
            
        }
        else{
            
        }
    });
};

exports.findByProximity = function(req, res){
    var userId = req.params.userId;
    User.findById(userId, function(err, user){
        if(err){
            
        }
        else if(!user){
            
        }
        else{
            
        }
    });
};

exports.findByProximityZero = function(req, res){
    var userId = req.params.userId;
    User.findByProximityZero(userId, function(err, users){
        if(err){
            
        }
        else if(!users){
            
        }
        else{
            
        }
    });
};

exports.findByProximityFirst = function(req, res){
    var userId = req.params.userId;
    User.findByProximityFirst(userId, function(err, users){
        if(err){
            
        }
        else if(!users){
            
        }
        else{
            
        }
    });
};

exports.findByProximitySecond = function(req, res){
    var userId = req.params.userId;
    User.findByProximitySecond(userId, function(err, users){
        if(err){
            
        }
        else if(!users){
            
        }
        else{
            
        }
    });
};

exports.findByProximityThird = function(req, res){
    var userId = req.params.userId;
    User.findByProximityThird(userId, function(err, users){
        if(err){
            
        }
        else if(!users){
            
        }
        else{
            
        }
    });
};


exports.findMyProximity = function(req, res){
    var userId = req.user._id;
    User.findById(userId, function(err, user){
        if(err){
            
        }
        else if(!user){
            
        }
        else{
            
        }
    });
};

exports.findMyProximityZero = function(req, res){
    var userId = req.user._id;
    User.findByProximityZero(userId, function(err, users){
        if(err){
            
        }
        else if(!users){
            
        }
        else{
            
        }
    });
};

exports.findMyProximityFirst = function(req, res){
    var userId = req.user._id;
    User.findByProximityFirst(userId, function(err, users){
        if(err){
            
        }
        else if(!users){
            
        }
        else{
            
        }
    });
};

exports.findMyProximitySecond = function(req, res){
    var userId = req.user._id;
    User.findByProximitySecond(userId, function(err, users){
        if(err){
            
        }
        else if(!users){
            
        }
        else{
            
        }
    });
};

exports.findMyProximityThird = function(req, res){
    var userId = req.user._id;
    User.findByProximityThird(userId, function(err, users){
        if(err){
            
        }
        else if(!users){
            
        }
        else{
            
        }
    });
};


exports.findSelectedProximity = function(req, res){
    var userId = req.params.userId;
    User.findById(userId, function(err, user){
        if(err){
            
        }
        else if(!user){
            
        }
        else{
            
        }
    });
};

exports.findSelectedProximityZero = function(req, res){
    var userId = req.params.userId;
    User.findByProximityZero(userId, function(err, users){
        if(err){
            
        }
        else if(!users){
            
        }
        else{
            
        }
    });
};

exports.findSelectedProximityFirst = function(req, res){
    var userId = req.params.userId;
    User.findByProximityFirst(userId, function(err, users){
        if(err){
            
        }
        else if(!users){
            
        }
        else{
            
        }
    });
};

exports.findSelectedProximitySecond = function(req, res){
    var userId = req.params.userId;
    User.findByProximitySecond(userId, function(err, users){
        if(err){
            
        }
        else if(!users){
            
        }
        else{
            
        }
    });
};

exports.findSelectedProximityThird = function(req, res){
    var userId = req.params.userId;
    User.findByProximityThird(userId, function(err, users){
        if(err){
            
        }
        else if(!users){
            
        }
        else{
            
        }
    });
};



exports.findAllProximity = function(req, res){
    var userId = req.params.userId;
    User.findById(userId, function(err, user){
        if(err){
            
        }
        else if(!user){
            
        }
        else{
            
        }
    });
};


exports.findAllProximityZero = function(req, res){
    var userId = req.params.userId;
    User.findByProximityZero(userId, function(err, users){
        if(err){
            
        }
        else if(!users){
            
        }
        else{
            
        }
    });
};


exports.findAllProximityFirst = function(req, res){
    var userId = req.params.userId;
    User.findByProximityFirst(userId, function(err, users){
        if(err){
            
        }
        else if(!users){
            
        }
        else{
            
        }
    });
};


exports.findAllProximitySecond = function(req, res){
    var userId = req.params.userId;
    User.findByProximitySecond(userId, function(err, users){
        if(err){
            
        }
        else if(!users){
            
        }
        else{
            
        }
    });
};


exports.findAllProximityThird = function(req, res){
    var userId = req.params.userId;
    User.findByProximityThird(userId, function(err, users){
        if(err){
            
        }
        else if(!users){
            
        }
        else{
            
        }
    });
};





exports.create = function(req, res){
    
    var user = new User({
        local: {
            username: req.body.username,
            email: req.body.email,
            password: req.body.password
        },
        facebook: req.body.facebook
    });
    
    User.find(user, function(err, user){
        if(!user){
            user.create(function(err, user, accessToken){
                if(err) throw err;
                user.action = "create";
                user.status = "success";
                res.json(user);
            });
        }
        else{
            res.json({
                action:"create",
                status:"failed",
                reason:"user already exist"
            });
        }
    });
};


exports.update = function(req, res){
    var id = req.params.userId;
    var newUser = req.body;
    if(id){
        User.find(id, function(err, user){
            if(err) throw err;
            user.local = newUser.local;
            user.facebook = newUser.facebook;
            user.action = "update";
            user.status = "success";
            res.json(user);
        });
    }
};



exports.delete = function(req, res){
    var id = req.params.userId;
    if(id){
        User.remove(id, function(err, result){
            if(err) throw err;
            result.action = "delete";
            result.status = "success";
            res.json(status);
        });
    }
};