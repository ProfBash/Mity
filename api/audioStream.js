/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var express = require('express');
var audioStreamApp = express();
var audioStreamCtrl = require('../controller/audioStream');

var auth = require('../auth');


audioStreamApp.get('/', audioStreamCtrl.findAll, auth.validateAdminAccess);


audioStreamApp.get('/by/userId', audioStreamCtrl.findByUserId, auth.validateAdminAccess);


audioStreamApp.get('/by/userIds', audioStreamCtrl.findByUserIds, auth.validateAdminAccess);


audioStreamApp.get('/proximity', audioStreamCtrl.findProximity, auth.validatePublicAccess);


audioStreamApp.get('/proximity/zero', audioStreamCtrl.findProximityZero, auth.validatePublicAccess);


audioStreamApp.get('/proximity/first', audioStreamCtrl.findProximityFirst, auth.validatePublicAccess);


audioStreamApp.get('/proximity/second', audioStreamCtrl.findProximitySecond, auth.validatePublicAccess);


audioStreamApp.get('/proximity/third', audioStreamCtrl.findProximityThird, auth.validatePublicAccess);


audioStreamApp.get('/selected/proximity', audioStreamCtrl.findSelectedProximity, auth.validatePublicAccess);


audioStreamApp.get('/selected/proximity/zero', audioStreamCtrl.findSelectedProximityZero, auth.validatePublicAccess);


audioStreamApp.get('/selected/proximity/first', audioStreamCtrl.findSelectedProximityFirst, auth.validatePublicAccess);


audioStreamApp.get('/selected/proximity/second', audioStreamCtrl.findSelectedProximitySecond, auth.validatePublicAccess);


audioStreamApp.get('/selected/proximity/third', audioStreamCtrl.findSelectedProximityThird, auth.validatePublicAccess);


audioStreamApp.get('/my/proximity', audioStreamCtrl.findMyProximity, auth.validatePublicAccess);


audioStreamApp.get('/my/proximity/zero', audioStreamCtrl.findMyProximityZero, auth.validatePublicAccess);


audioStreamApp.get('/my/proximity/first', audioStreamCtrl.findMyProximityFirst, auth.validatePublicAccess);


audioStreamApp.get('/my/proximity/second', audioStreamCtrl.findMyProximitySecond, auth.validatePublicAccess);


audioStreamApp.get('/my/proximity/third', audioStreamCtrl.findMyProximityThird, auth.validatePublicAccess);


audioStreamApp.get('/by/:userId/proximity', audioStreamCtrl.findByProximity, auth.validatePublicAccess);


audioStreamApp.get('/by/:userId/proximity/zero', audioStreamCtrl.findByProximityZero, auth.validatePublicAccess);


audioStreamApp.get('/by/:userId/proximity/first', audioStreamCtrl.findByProximityFirst, auth.validatePublicAccess);


audioStreamApp.get('/by/:userId/proximity/second', audioStreamCtrl.findByProximitySecond, auth.validatePublicAccess);


audioStreamApp.get('/by/:userId/proximity/third', audioStreamCtrl.findByProximityThird, auth.validatePublicAccess);


audioStreamApp.get('/:audioStreamId', audioStreamCtrl.find, auth.validatePublicAccess);


audioStreamApp.post('/', audioStreamCtrl.create, auth.validateEditorAccess);


audioStreamApp.put('/:audioStreamId', audioStreamCtrl.update, auth.validateEditorAccess);


audioStreamApp.delete('/:audioStreamId', audioStreamCtrl.delete, auth.validateEditorAccess);






module.exports = audioStreamApp;

