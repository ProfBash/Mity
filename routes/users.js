var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    if(req.headers.token){
        console.log(req.headers.token)
    }
  res.send('respond with a resource');
});

module.exports = router;
