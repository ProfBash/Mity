/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var AudioStream = require("../model/audioStream");


exports.findAll = function(req, res){
    AudioStream.find({}, function(err, audioStreams){
        if(err) {
            
        }
        else if(audioStreams.length === 0){
            
        }
        else{
            
        }
    });
};


exports.findById = function(req, res){
    var audioStreamId = req.params.audioStreamId;
    AudioStream.findById(audioStreamId, function(err, audioStream){
        if(err){
            
        }
        else if(!audioStream){
            
        }
        else{
            
        }
    });
};

exports.findByIds = function(req, res){
    var audioStreamIds = req.params.audioStreamIds;
    AudioStream.findByIds(audioStreamIds, function(err, audioStreams){
        if(err){
            
        }
        else if(!audioStreams){
            
        }
        else{
            
        }
    });
};

exports.findByUserId = function(req, res){
    var userId = req.params.userId;
    AudioStream.findByUserId(userId, function(err, audioStreams){
        if(err){
            
        }
        else if(!audioStreams){
            
        }
        else{
            
        }
    });
};

exports.findByUserIds = function(req, res){
    var userIds = req.params.userIds;
    AudioStream.findByUserIds(userIds, function(err, audioStreams){
        if(err){
            
        }
        else if(!audioStreams){
            
        }
        else{
            
        }
    });
};

exports.findByProximity = function(req, res){
    var userId = req.params.userId;
    AudioStream.findById(userId, function(err, audioStream){
        if(err){
            
        }
        else if(!audioStream){
            
        }
        else{
            
        }
    });
};

exports.findByProximityZero = function(req, res){
    var userId = req.params.userId;
    AudioStream.findByProximityZero(userId, function(err, audioStreams){
        if(err){
            
        }
        else if(!audioStreams){
            
        }
        else{
            
        }
    });
};

exports.findByProximityFirst = function(req, res){
    var userId = req.params.userId;
    AudioStream.findByProximityFirst(userId, function(err, audioStreams){
        if(err){
            
        }
        else if(!audioStreams){
            
        }
        else{
            
        }
    });
};

exports.findByProximitySecond = function(req, res){
    var userId = req.params.userId;
    AudioStream.findByProximitySecond(userId, function(err, audioStreams){
        if(err){
            
        }
        else if(!audioStreams){
            
        }
        else{
            
        }
    });
};

exports.findByProximityThird = function(req, res){
    var userId = req.params.userId;
    AudioStream.findByProximityThird(userId, function(err, audioStreams){
        if(err){
            
        }
        else if(!audioStreams){
            
        }
        else{
            
        }
    });
};


exports.findMyProximity = function(req, res){
    var userId = req.user._id;
    AudioStream.findById(userId, function(err, audioStream){
        if(err){
            
        }
        else if(!audioStream){
            
        }
        else{
            
        }
    });
};

exports.findMyProximityZero = function(req, res){
    var userId = req.user._id;
    AudioStream.findByProximityZero(userId, function(err, audioStreams){
        if(err){
            
        }
        else if(!audioStreams){
            
        }
        else{
            
        }
    });
};

exports.findMyProximityFirst = function(req, res){
    var userId = req.user._id;
    AudioStream.findByProximityFirst(userId, function(err, audioStreams){
        if(err){
            
        }
        else if(!audioStreams){
            
        }
        else{
            
        }
    });
};

exports.findMyProximitySecond = function(req, res){
    var userId = req.user._id;
    AudioStream.findByProximitySecond(userId, function(err, audioStreams){
        if(err){
            
        }
        else if(!audioStreams){
            
        }
        else{
            
        }
    });
};

exports.findMyProximityThird = function(req, res){
    var userId = req.user._id;
    AudioStream.findByProximityThird(userId, function(err, audioStreams){
        if(err){
            
        }
        else if(!audioStreams){
            
        }
        else{
            
        }
    });
};


exports.findSelectedProximity = function(req, res){
    var userId = req.params.userId;
    AudioStream.findById(userId, function(err, audioStream){
        if(err){
            
        }
        else if(!audioStream){
            
        }
        else{
            
        }
    });
};

exports.findSelectedProximityZero = function(req, res){
    var userId = req.params.userId;
    AudioStream.findByProximityZero(userId, function(err, audioStreams){
        if(err){
            
        }
        else if(!audioStreams){
            
        }
        else{
            
        }
    });
};

exports.findSelectedProximityFirst = function(req, res){
    var userId = req.params.userId;
    AudioStream.findByProximityFirst(userId, function(err, audioStreams){
        if(err){
            
        }
        else if(!audioStreams){
            
        }
        else{
            
        }
    });
};

exports.findSelectedProximitySecond = function(req, res){
    var userId = req.params.userId;
    AudioStream.findByProximitySecond(userId, function(err, audioStreams){
        if(err){
            
        }
        else if(!audioStreams){
            
        }
        else{
            
        }
    });
};

exports.findSelectedProximityThird = function(req, res){
    var userId = req.params.userId;
    AudioStream.findByProximityThird(userId, function(err, audioStreams){
        if(err){
            
        }
        else if(!audioStreams){
            
        }
        else{
            
        }
    });
};



exports.findAllProximity = function(req, res){
    var userId = req.params.userId;
    AudioStream.findById(userId, function(err, audioStream){
        if(err){
            
        }
        else if(!audioStream){
            
        }
        else{
            
        }
    });
};

exports.findAllProximityZero = function(req, res){
    var userId = req.params.userId;
    AudioStream.findByProximityZero(userId, function(err, audioStreams){
        if(err){
            
        }
        else if(!audioStreams){
            
        }
        else{
            
        }
    });
};

exports.findAllProximityFirst = function(req, res){
    var userId = req.params.userId;
    AudioStream.findByProximityFirst(userId, function(err, audioStreams){
        if(err){
            
        }
        else if(!audioStreams){
            
        }
        else{
            
        }
    });
};

exports.findAllProximitySecond = function(req, res){
    var userId = req.params.userId;
    AudioStream.findByProximitySecond(userId, function(err, audioStreams){
        if(err){
            
        }
        else if(!audioStreams){
            
        }
        else{
            
        }
    });
};

exports.findAllProximityThird = function(req, res){
    var userId = req.params.userId;
    AudioStream.findByProximityThird(userId, function(err, audioStreams){
        if(err){
            
        }
        else if(!audioStreams){
            
        }
        else{
            
        }
    });
};


exports.create = function(req, res){
    var audioStream = {
        userId:req.user._id,
        length:req.body.length,
        src:req.body.src,
        coverImage:req.body.coverImage,
        description:req.body.description,
        title:req.body.title,
        accessType:req.body.title
    };
    audioStream = new AudioStream(audioStream);
    audioStream.create(function(err, audioStream){
        if(err){
            
        }
        else if(!audioStream){
            
        }
        else{
            
        }
    });
};


exports.update = function(req, res){
    var audioStreamId = req.params.audioStreamId;
    var audioStream = {
        userId:req.user._id,
        length:req.body.length,
        src:req.body.src,
        coverImage:req.body.coverImage,
        description:req.body.description,
        title:req.body.title,
        accessType:req.body.title
    };
    AudioStream.findOneAndUpdate(audioStreamId, audioStream, function(err, audioStream){
        if(err){
            
        }
        else if(!audioStream){
            
        }
        else{
            
        }
    });
};


exports.delete = function(req, res){
    var audioStreamId = req.params.audioStreamId;
    AudioStream.remove(audioStreamId, function(err, response){
        if(err){
            
        }
        else{
            
        }
    });
};



