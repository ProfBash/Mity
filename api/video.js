/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


var express = require('express');
var videoApp = express();
var videoCtrl = require('../controller/video');

var auth = require('../auth');


videoApp.get('/', videoCtrl.findAll, auth.validateAdminAccess);


videoApp.get('/by/userId', videoCtrl.findByUserId, auth.validateAdminAccess);


videoApp.get('/by/userIds', videoCtrl.findByUserIds, auth.validateAdminAccess);


videoApp.get('/proximity', videoCtrl.findProximity, auth.validatePublicAccess);


videoApp.get('/proximity/zero', videoCtrl.findProximityZero, auth.validatePublicAccess);


videoApp.get('/proximity/first', videoCtrl.findProximityFirst, auth.validatePublicAccess);


videoApp.get('/proximity/second', videoCtrl.findProximitySecond, auth.validatePublicAccess);


videoApp.get('/proximity/third', videoCtrl.findProximityThird, auth.validatePublicAccess);


videoApp.get('/selected/proximity', videoCtrl.findSelectedProximity, auth.validatePublicAccess);


videoApp.get('/selected/proximity/zero', videoCtrl.findSelectedProximityZero, auth.validatePublicAccess);


videoApp.get('/selected/proximity/first', videoCtrl.findSelectedProximityFirst, auth.validatePublicAccess);


videoApp.get('/selected/proximity/second', videoCtrl.findSelectedProximitySecond, auth.validatePublicAccess);


videoApp.get('/selected/proximity/third', videoCtrl.findSelectedProximityThird, auth.validatePublicAccess);


videoApp.get('/my/proximity', videoCtrl.findMyProximity, auth.validatePublicAccess);


videoApp.get('/my/proximity/zero', videoCtrl.findMyProximityZero, auth.validatePublicAccess);


videoApp.get('/my/proximity/first', videoCtrl.findMyProximityFirst, auth.validatePublicAccess);


videoApp.get('/my/proximity/second', videoCtrl.findMyProximitySecond, auth.validatePublicAccess);


videoApp.get('/my/proximity/third', videoCtrl.findMyProximityThird, auth.validatePublicAccess);


videoApp.get('/by/:userId/proximity', videoCtrl.findByProximity, auth.validatePublicAccess);


videoApp.get('/by/:userId/proximity/zero', videoCtrl.findByProximityZero, auth.validatePublicAccess);


videoApp.get('/by/:userId/proximity/first', videoCtrl.findByProximityFirst, auth.validatePublicAccess);


videoApp.get('/by/:userId/proximity/second', videoCtrl.findByProximitySecond, auth.validatePublicAccess);


videoApp.get('/by/:userId/proximity/third', videoCtrl.findByProximityThird, auth.validatePublicAccess);


videoApp.get('/:videoId', videoCtrl.find, auth.validatePublicAccess);


videoApp.post('/', videoCtrl.create, auth.validateEditorAccess);


videoApp.put('/:videoId', videoCtrl.update, auth.validateEditorAccess);


videoApp.delete('/:videoId', videoCtrl.delete, auth.validateEditorAccess);






module.exports = videoApp;









module.exports = videoApp;