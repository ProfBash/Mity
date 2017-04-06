/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var auth = {
    username:"jawadprox",
    password:"mabintoujalloh123#"
};

var config = {
    secret: "loveIsStupid",
    local:"mongodb://127.0.0.1:27017/main",
    cloud:"mongodb://"+auth.username+":"+auth.password+"@mity0-shard-00-00-6vodj.mongodb.net:27017,mity0-shard-00-01-6vodj.mongodb.net:27017,mity0-shard-00-02-6vodj.mongodb.net:27017/<DATABASE>?ssl=true&replicaSet=mity0-shard-0&authSource=admin",
    localTest:"mongodb://127.0.0.1:27017/test",
    cloudTest:"mongodb://"+auth.username+":"+auth.password+"@mity0-shard-00-00-6vodj.mongodb.net:27017,mity0-shard-00-01-6vodj.mongodb.net:27017,mity0-shard-00-02-6vodj.mongodb.net:27017/<DATABASE>?ssl=true&replicaSet=mity0-shard-0&authSource=admin"
};

module.exports = config;
