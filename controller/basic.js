/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var Basic = require("../model/basic");


exports.findAll = function(req, res){
    Basic.find({}, function(err, basics){
        if(err) {
            
        }
        else if(basics.length === 0){
            
        }
        else{
            
        }
    });
};


exports.findById = function(req, res){
    var basicId = req.params.basicId;
    Basic.findById(basicId, function(err, basic){
        if(err){
            
        }
        else if(!basic){
            
        }
        else{
            
        }
    });
};

exports.findByIds = function(req, res){
    var basicIds = req.params.basicIds;
    Basic.findByIds(basicIds, function(err, basics){
        if(err){
            
        }
        else if(!basics){
            
        }
        else{
            
        }
    });
};

exports.findByUserId = function(req, res){
    var userId = req.params.userId;
    Basic.findByUserId(userId, function(err, basics){
        if(err){
            
        }
        else if(!basics){
            
        }
        else{
            
        }
    });
};

exports.findByUserIds = function(req, res){
    var userIds = req.params.userIds;
    Basic.findByUserIds(userIds, function(err, basics){
        if(err){
            
        }
        else if(!basics){
            
        }
        else{
            
        }
    });
};

exports.findByProximity = function(req, res){
    var userId = req.params.userId;
    Basic.findById(userId, function(err, basic){
        if(err){
            
        }
        else if(!basic){
            
        }
        else{
            
        }
    });
};

exports.findByProximityZero = function(req, res){
    var userId = req.params.userId;
    Basic.findByProximityZero(userId, function(err, basics){
        if(err){
            
        }
        else if(!basics){
            
        }
        else{
            
        }
    });
};

exports.findByProximityFirst = function(req, res){
    var userId = req.params.userId;
    Basic.findByProximityFirst(userId, function(err, basics){
        if(err){
            
        }
        else if(!basics){
            
        }
        else{
            
        }
    });
};

exports.findByProximitySecond = function(req, res){
    var userId = req.params.userId;
    Basic.findByProximitySecond(userId, function(err, basics){
        if(err){
            
        }
        else if(!basics){
            
        }
        else{
            
        }
    });
};

exports.findByProximityThird = function(req, res){
    var userId = req.params.userId;
    Basic.findByProximityThird(userId, function(err, basics){
        if(err){
            
        }
        else if(!basics){
            
        }
        else{
            
        }
    });
};


exports.findMyProximity = function(req, res){
    var userId = req.user._id;
    Basic.findById(userId, function(err, basic){
        if(err){
            
        }
        else if(!basic){
            
        }
        else{
            
        }
    });
};

exports.findMyProximityZero = function(req, res){
    var userId = req.user._id;
    Basic.findByProximityZero(userId, function(err, basics){
        if(err){
            
        }
        else if(!basics){
            
        }
        else{
            
        }
    });
};

exports.findMyProximityFirst = function(req, res){
    var userId = req.user._id;
    Basic.findByProximityFirst(userId, function(err, basics){
        if(err){
            
        }
        else if(!basics){
            
        }
        else{
            
        }
    });
};

exports.findMyProximitySecond = function(req, res){
    var userId = req.user._id;
    Basic.findByProximitySecond(userId, function(err, basics){
        if(err){
            
        }
        else if(!basics){
            
        }
        else{
            
        }
    });
};

exports.findMyProximityThird = function(req, res){
    var userId = req.user._id;
    Basic.findByProximityThird(userId, function(err, basics){
        if(err){
            
        }
        else if(!basics){
            
        }
        else{
            
        }
    });
};


exports.findSelectedProximity = function(req, res){
    var userId = req.params.userId;
    Basic.findById(userId, function(err, basic){
        if(err){
            
        }
        else if(!basic){
            
        }
        else{
            
        }
    });
};

exports.findSelectedProximityZero = function(req, res){
    var userId = req.params.userId;
    Basic.findByProximityZero(userId, function(err, basics){
        if(err){
            
        }
        else if(!basics){
            
        }
        else{
            
        }
    });
};

exports.findSelectedProximityFirst = function(req, res){
    var userId = req.params.userId;
    Basic.findByProximityFirst(userId, function(err, basics){
        if(err){
            
        }
        else if(!basics){
            
        }
        else{
            
        }
    });
};

exports.findSelectedProximitySecond = function(req, res){
    var userId = req.params.userId;
    Basic.findByProximitySecond(userId, function(err, basics){
        if(err){
            
        }
        else if(!basics){
            
        }
        else{
            
        }
    });
};

exports.findSelectedProximityThird = function(req, res){
    var userId = req.params.userId;
    Basic.findByProximityThird(userId, function(err, basics){
        if(err){
            
        }
        else if(!basics){
            
        }
        else{
            
        }
    });
};



exports.findAllProximity = function(req, res){
    var userId = req.params.userId;
    Basic.findById(userId, function(err, basic){
        if(err){
            
        }
        else if(!basic){
            
        }
        else{
            
        }
    });
};

exports.findAllProximityZero = function(req, res){
    var userId = req.params.userId;
    Basic.findByProximityZero(userId, function(err, basics){
        if(err){
            
        }
        else if(!basics){
            
        }
        else{
            
        }
    });
};

exports.findAllProximityFirst = function(req, res){
    var userId = req.params.userId;
    Basic.findByProximityFirst(userId, function(err, basics){
        if(err){
            
        }
        else if(!basics){
            
        }
        else{
            
        }
    });
};

exports.findAllProximitySecond = function(req, res){
    var userId = req.params.userId;
    Basic.findByProximitySecond(userId, function(err, basics){
        if(err){
            
        }
        else if(!basics){
            
        }
        else{
            
        }
    });
};

exports.findAllProximityThird = function(req, res){
    var userId = req.params.userId;
    Basic.findByProximityThird(userId, function(err, basics){
        if(err){
            
        }
        else if(!basics){
            
        }
        else{
            
        }
    });
};


exports.create = function(req, res){
    var basic = {
        userId:req.user._id,
        length:req.body.length,
        src:req.body.src,
        coverImage:req.body.coverImage,
        description:req.body.description,
        title:req.body.title,
        accessType:req.body.title
    };
    basic = new Basic(basic);
    basic.create(function(err, basic){
        if(err){
            
        }
        else if(!basic){
            
        }
        else{
            
        }
    });
};


exports.update = function(req, res){
    var basicId = req.params.basicId;
    var basic = {
        userId:req.user._id,
        length:req.body.length,
        src:req.body.src,
        coverImage:req.body.coverImage,
        description:req.body.description,
        title:req.body.title,
        accessType:req.body.title
    };
    Basic.findOneAndUpdate(basicId, basic, function(err, basic){
        if(err){
            
        }
        else if(!basic){
            
        }
        else{
            
        }
    });
};


exports.delete = function(req, res){
    var basicId = req.params.basicId;
    Basic.remove(basicId, function(err, response){
        if(err){
            
        }
        else{
            
        }
    });
};

