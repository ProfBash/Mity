/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var Image = require("../model/image");


exports.findAll = function(req, res){
    Image.find({}, function(err, images){
        if(err) {
            
        }
        else if(images.length === 0){
            
        }
        else{
            
        }
    });
};


exports.findById = function(req, res){
    var imageId = req.params.imageId;
    Image.findById(imageId, function(err, image){
        if(err){
            
        }
        else if(!image){
            
        }
        else{
            
        }
    });
};

exports.findByIds = function(req, res){
    var imageIds = req.params.imageIds;
    Image.findByIds(imageIds, function(err, images){
        if(err){
            
        }
        else if(!images){
            
        }
        else{
            
        }
    });
};

exports.findByUserId = function(req, res){
    var userId = req.params.userId;
    Image.findByUserId(userId, function(err, images){
        if(err){
            
        }
        else if(!images){
            
        }
        else{
            
        }
    });
};

exports.findByUserIds = function(req, res){
    var userIds = req.params.userIds;
    Image.findByUserIds(userIds, function(err, images){
        if(err){
            
        }
        else if(!images){
            
        }
        else{
            
        }
    });
};

exports.findByProximity = function(req, res){
    var userId = req.params.userId;
    Image.findById(userId, function(err, image){
        if(err){
            
        }
        else if(!image){
            
        }
        else{
            
        }
    });
};

exports.findByProximityZero = function(req, res){
    var userId = req.params.userId;
    Image.findByProximityZero(userId, function(err, images){
        if(err){
            
        }
        else if(!images){
            
        }
        else{
            
        }
    });
};

exports.findByProximityFirst = function(req, res){
    var userId = req.params.userId;
    Image.findByProximityFirst(userId, function(err, images){
        if(err){
            
        }
        else if(!images){
            
        }
        else{
            
        }
    });
};

exports.findByProximitySecond = function(req, res){
    var userId = req.params.userId;
    Image.findByProximitySecond(userId, function(err, images){
        if(err){
            
        }
        else if(!images){
            
        }
        else{
            
        }
    });
};

exports.findByProximityThird = function(req, res){
    var userId = req.params.userId;
    Image.findByProximityThird(userId, function(err, images){
        if(err){
            
        }
        else if(!images){
            
        }
        else{
            
        }
    });
};


exports.findMyProximity = function(req, res){
    var userId = req.user._id;
    Image.findById(userId, function(err, image){
        if(err){
            
        }
        else if(!image){
            
        }
        else{
            
        }
    });
};

exports.findMyProximityZero = function(req, res){
    var userId = req.user._id;
    Image.findByProximityZero(userId, function(err, images){
        if(err){
            
        }
        else if(!images){
            
        }
        else{
            
        }
    });
};

exports.findMyProximityFirst = function(req, res){
    var userId = req.user._id;
    Image.findByProximityFirst(userId, function(err, images){
        if(err){
            
        }
        else if(!images){
            
        }
        else{
            
        }
    });
};

exports.findMyProximitySecond = function(req, res){
    var userId = req.user._id;
    Image.findByProximitySecond(userId, function(err, images){
        if(err){
            
        }
        else if(!images){
            
        }
        else{
            
        }
    });
};

exports.findMyProximityThird = function(req, res){
    var userId = req.user._id;
    Image.findByProximityThird(userId, function(err, images){
        if(err){
            
        }
        else if(!images){
            
        }
        else{
            
        }
    });
};


exports.findSelectedProximity = function(req, res){
    var userId = req.params.userId;
    Image.findById(userId, function(err, image){
        if(err){
            
        }
        else if(!image){
            
        }
        else{
            
        }
    });
};

exports.findSelectedProximityZero = function(req, res){
    var userId = req.params.userId;
    Image.findByProximityZero(userId, function(err, images){
        if(err){
            
        }
        else if(!images){
            
        }
        else{
            
        }
    });
};

exports.findSelectedProximityFirst = function(req, res){
    var userId = req.params.userId;
    Image.findByProximityFirst(userId, function(err, images){
        if(err){
            
        }
        else if(!images){
            
        }
        else{
            
        }
    });
};

exports.findSelectedProximitySecond = function(req, res){
    var userId = req.params.userId;
    Image.findByProximitySecond(userId, function(err, images){
        if(err){
            
        }
        else if(!images){
            
        }
        else{
            
        }
    });
};

exports.findSelectedProximityThird = function(req, res){
    var userId = req.params.userId;
    Image.findByProximityThird(userId, function(err, images){
        if(err){
            
        }
        else if(!images){
            
        }
        else{
            
        }
    });
};



exports.findAllProximity = function(req, res){
    var userId = req.params.userId;
    Image.findById(userId, function(err, image){
        if(err){
            
        }
        else if(!image){
            
        }
        else{
            
        }
    });
};

exports.findAllProximityZero = function(req, res){
    var userId = req.params.userId;
    Image.findByProximityZero(userId, function(err, images){
        if(err){
            
        }
        else if(!images){
            
        }
        else{
            
        }
    });
};

exports.findAllProximityFirst = function(req, res){
    var userId = req.params.userId;
    Image.findByProximityFirst(userId, function(err, images){
        if(err){
            
        }
        else if(!images){
            
        }
        else{
            
        }
    });
};

exports.findAllProximitySecond = function(req, res){
    var userId = req.params.userId;
    Image.findByProximitySecond(userId, function(err, images){
        if(err){
            
        }
        else if(!images){
            
        }
        else{
            
        }
    });
};

exports.findAllProximityThird = function(req, res){
    var userId = req.params.userId;
    Image.findByProximityThird(userId, function(err, images){
        if(err){
            
        }
        else if(!images){
            
        }
        else{
            
        }
    });
};


exports.create = function(req, res){
    var image = {
        userId:req.user._id,
        length:req.body.length,
        src:req.body.src,
        coverImage:req.body.coverImage,
        description:req.body.description,
        title:req.body.title,
        accessType:req.body.title
    };
    image = new Image(image);
    image.create(function(err, image){
        if(err){
            
        }
        else if(!image){
            
        }
        else{
            
        }
    });
};


exports.update = function(req, res){
    var imageId = req.params.imageId;
    var image = {
        userId:req.user._id,
        length:req.body.length,
        src:req.body.src,
        coverImage:req.body.coverImage,
        description:req.body.description,
        title:req.body.title,
        accessType:req.body.title
    };
    Image.findOneAndUpdate(imageId, image, function(err, image){
        if(err){
            
        }
        else if(!image){
            
        }
        else{
            
        }
    });
};


exports.delete = function(req, res){
    var imageId = req.params.imageId;
    Image.remove(imageId, function(err, response){
        if(err){
            
        }
        else{
            
        }
    });
};



