/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


var Quote = require("../model/quote");


exports.findAll = function(req, res){
    Quote.find({}, function(err, quotes){
        if(err) {
            
        }
        else if(quotes.length === 0){
            
        }
        else{
            
        }
    });
};


exports.findById = function(req, res){
    var quoteId = req.params.quoteId;
    Quote.findById(quoteId, function(err, quote){
        if(err){
            
        }
        else if(!quote){
            
        }
        else{
            
        }
    });
};

exports.findByIds = function(req, res){
    var quoteIds = req.params.quoteIds;
    Quote.findByIds(quoteIds, function(err, quotes){
        if(err){
            
        }
        else if(!quotes){
            
        }
        else{
            
        }
    });
};

exports.findByUserId = function(req, res){
    var userId = req.params.userId;
    Quote.findByUserId(userId, function(err, quotes){
        if(err){
            
        }
        else if(!quotes){
            
        }
        else{
            
        }
    });
};

exports.findByUserIds = function(req, res){
    var userIds = req.params.userIds;
    Quote.findByUserIds(userIds, function(err, quotes){
        if(err){
            
        }
        else if(!quotes){
            
        }
        else{
            
        }
    });
};

exports.findByProximity = function(req, res){
    var userId = req.params.userId;
    Quote.findById(userId, function(err, quote){
        if(err){
            
        }
        else if(!quote){
            
        }
        else{
            
        }
    });
};

exports.findByProximityZero = function(req, res){
    var userId = req.params.userId;
    Quote.findByProximityZero(userId, function(err, quotes){
        if(err){
            
        }
        else if(!quotes){
            
        }
        else{
            
        }
    });
};

exports.findByProximityFirst = function(req, res){
    var userId = req.params.userId;
    Quote.findByProximityFirst(userId, function(err, quotes){
        if(err){
            
        }
        else if(!quotes){
            
        }
        else{
            
        }
    });
};

exports.findByProximitySecond = function(req, res){
    var userId = req.params.userId;
    Quote.findByProximitySecond(userId, function(err, quotes){
        if(err){
            
        }
        else if(!quotes){
            
        }
        else{
            
        }
    });
};

exports.findByProximityThird = function(req, res){
    var userId = req.params.userId;
    Quote.findByProximityThird(userId, function(err, quotes){
        if(err){
            
        }
        else if(!quotes){
            
        }
        else{
            
        }
    });
};


exports.findMyProximity = function(req, res){
    var userId = req.user._id;
    Quote.findById(userId, function(err, quote){
        if(err){
            
        }
        else if(!quote){
            
        }
        else{
            
        }
    });
};

exports.findMyProximityZero = function(req, res){
    var userId = req.user._id;
    Quote.findByProximityZero(userId, function(err, quotes){
        if(err){
            
        }
        else if(!quotes){
            
        }
        else{
            
        }
    });
};

exports.findMyProximityFirst = function(req, res){
    var userId = req.user._id;
    Quote.findByProximityFirst(userId, function(err, quotes){
        if(err){
            
        }
        else if(!quotes){
            
        }
        else{
            
        }
    });
};

exports.findMyProximitySecond = function(req, res){
    var userId = req.user._id;
    Quote.findByProximitySecond(userId, function(err, quotes){
        if(err){
            
        }
        else if(!quotes){
            
        }
        else{
            
        }
    });
};

exports.findMyProximityThird = function(req, res){
    var userId = req.user._id;
    Quote.findByProximityThird(userId, function(err, quotes){
        if(err){
            
        }
        else if(!quotes){
            
        }
        else{
            
        }
    });
};


exports.findSelectedProximity = function(req, res){
    var userId = req.params.userId;
    Quote.findById(userId, function(err, quote){
        if(err){
            
        }
        else if(!quote){
            
        }
        else{
            
        }
    });
};

exports.findSelectedProximityZero = function(req, res){
    var userId = req.params.userId;
    Quote.findByProximityZero(userId, function(err, quotes){
        if(err){
            
        }
        else if(!quotes){
            
        }
        else{
            
        }
    });
};

exports.findSelectedProximityFirst = function(req, res){
    var userId = req.params.userId;
    Quote.findByProximityFirst(userId, function(err, quotes){
        if(err){
            
        }
        else if(!quotes){
            
        }
        else{
            
        }
    });
};

exports.findSelectedProximitySecond = function(req, res){
    var userId = req.params.userId;
    Quote.findByProximitySecond(userId, function(err, quotes){
        if(err){
            
        }
        else if(!quotes){
            
        }
        else{
            
        }
    });
};

exports.findSelectedProximityThird = function(req, res){
    var userId = req.params.userId;
    Quote.findByProximityThird(userId, function(err, quotes){
        if(err){
            
        }
        else if(!quotes){
            
        }
        else{
            
        }
    });
};



exports.findAllProximity = function(req, res){
    var userId = req.params.userId;
    Quote.findById(userId, function(err, quote){
        if(err){
            
        }
        else if(!quote){
            
        }
        else{
            
        }
    });
};

exports.findAllProximityZero = function(req, res){
    var userId = req.params.userId;
    Quote.findByProximityZero(userId, function(err, quotes){
        if(err){
            
        }
        else if(!quotes){
            
        }
        else{
            
        }
    });
};

exports.findAllProximityFirst = function(req, res){
    var userId = req.params.userId;
    Quote.findByProximityFirst(userId, function(err, quotes){
        if(err){
            
        }
        else if(!quotes){
            
        }
        else{
            
        }
    });
};

exports.findAllProximitySecond = function(req, res){
    var userId = req.params.userId;
    Quote.findByProximitySecond(userId, function(err, quotes){
        if(err){
            
        }
        else if(!quotes){
            
        }
        else{
            
        }
    });
};

exports.findAllProximityThird = function(req, res){
    var userId = req.params.userId;
    Quote.findByProximityThird(userId, function(err, quotes){
        if(err){
            
        }
        else if(!quotes){
            
        }
        else{
            
        }
    });
};


exports.create = function(req, res){
    var quote = {
        userId:req.user._id,
        length:req.body.length,
        src:req.body.src,
        coverImage:req.body.coverImage,
        description:req.body.description,
        title:req.body.title,
        accessType:req.body.title
    };
    quote = new Quote(quote);
    quote.create(function(err, quote){
        if(err){
            
        }
        else if(!quote){
            
        }
        else{
            
        }
    });
};


exports.update = function(req, res){
    var quoteId = req.params.quoteId;
    var quote = {
        userId:req.user._id,
        length:req.body.length,
        src:req.body.src,
        coverImage:req.body.coverImage,
        description:req.body.description,
        title:req.body.title,
        accessType:req.body.title
    };
    Quote.findOneAndUpdate(quoteId, quote, function(err, quote){
        if(err){
            
        }
        else if(!quote){
            
        }
        else{
            
        }
    });
};


exports.delete = function(req, res){
    var quoteId = req.params.quoteId;
    Quote.remove(quoteId, function(err, response){
        if(err){
            
        }
        else{
            
        }
    });
};

