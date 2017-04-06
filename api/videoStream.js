/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var express = require('express');
var videoStreamApp = express();
var videoStreamCtrl = require('../controller/videoStream');

var auth = require('../auth');


videoStreamApp.get('/', videoStreamCtrl.findAll, auth.validateAdminAccess);


videoStreamApp.get('/by/userId', videoStreamCtrl.findByUserId, auth.validateAdminAccess);


videoStreamApp.get('/by/userIds', videoStreamCtrl.findByUserIds, auth.validateAdminAccess);


videoStreamApp.get('/proximity', videoStreamCtrl.findProximity, auth.validatePublicAccess);


videoStreamApp.get('/proximity/zero', videoStreamCtrl.findProximityZero, auth.validatePublicAccess);


videoStreamApp.get('/proximity/first', videoStreamCtrl.findProximityFirst, auth.validatePublicAccess);


videoStreamApp.get('/proximity/second', videoStreamCtrl.findProximitySecond, auth.validatePublicAccess);


videoStreamApp.get('/proximity/third', videoStreamCtrl.findProximityThird, auth.validatePublicAccess);


videoStreamApp.get('/selected/proximity', videoStreamCtrl.findSelectedProximity, auth.validatePublicAccess);


videoStreamApp.get('/selected/proximity/zero', videoStreamCtrl.findSelectedProximityZero, auth.validatePublicAccess);


videoStreamApp.get('/selected/proximity/first', videoStreamCtrl.findSelectedProximityFirst, auth.validatePublicAccess);


videoStreamApp.get('/selected/proximity/second', videoStreamCtrl.findSelectedProximitySecond, auth.validatePublicAccess);


videoStreamApp.get('/selected/proximity/third', videoStreamCtrl.findSelectedProximityThird, auth.validatePublicAccess);


videoStreamApp.get('/my/proximity', videoStreamCtrl.findMyProximity, auth.validatePublicAccess);


videoStreamApp.get('/my/proximity/zero', videoStreamCtrl.findMyProximityZero, auth.validatePublicAccess);


videoStreamApp.get('/my/proximity/first', videoStreamCtrl.findMyProximityFirst, auth.validatePublicAccess);


videoStreamApp.get('/my/proximity/second', videoStreamCtrl.findMyProximitySecond, auth.validatePublicAccess);


videoStreamApp.get('/my/proximity/third', videoStreamCtrl.findMyProximityThird, auth.validatePublicAccess);


videoStreamApp.get('/by/:userId/proximity', videoStreamCtrl.findByProximity, auth.validatePublicAccess);


videoStreamApp.get('/by/:userId/proximity/zero', videoStreamCtrl.findByProximityZero, auth.validatePublicAccess);


videoStreamApp.get('/by/:userId/proximity/first', videoStreamCtrl.findByProximityFirst, auth.validatePublicAccess);


videoStreamApp.get('/by/:userId/proximity/second', videoStreamCtrl.findByProximitySecond, auth.validatePublicAccess);


videoStreamApp.get('/by/:userId/proximity/third', videoStreamCtrl.findByProximityThird, auth.validatePublicAccess);


videoStreamApp.get('/:videoStreamId', videoStreamCtrl.find, auth.validatePublicAccess);


videoStreamApp.post('/', videoStreamCtrl.create, auth.validateEditorAccess);


videoStreamApp.put('/:videoStreamId', videoStreamCtrl.update, auth.validateEditorAccess);


videoStreamApp.delete('/:videoStreamId', videoStreamCtrl.delete, auth.validateEditorAccess);






module.exports = videoStreamApp;
