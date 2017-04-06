/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


var express = require('express');
var deviceApp = express();
var deviceCtrl = require('../controller/device');

var auth = require('../auth');


deviceApp.get('/', deviceCtrl.findAll, auth.validateAdminAccess);


deviceApp.get('/by/userId', deviceCtrl.findByUserId, auth.validateAdminAccess);


deviceApp.get('/by/userIds', deviceCtrl.findByUserIds, auth.validateAdminAccess);


deviceApp.get('/proximity', deviceCtrl.findProximity, auth.validatePublicAccess);


deviceApp.get('/proximity/zero', deviceCtrl.findProximityZero, auth.validatePublicAccess);


deviceApp.get('/proximity/first', deviceCtrl.findProximityFirst, auth.validatePublicAccess);


deviceApp.get('/proximity/second', deviceCtrl.findProximitySecond, auth.validatePublicAccess);


deviceApp.get('/proximity/third', deviceCtrl.findProximityThird, auth.validatePublicAccess);


deviceApp.get('/selected/proximity', deviceCtrl.findSelectedProximity, auth.validatePublicAccess);


deviceApp.get('/selected/proximity/zero', deviceCtrl.findSelectedProximityZero, auth.validatePublicAccess);


deviceApp.get('/selected/proximity/first', deviceCtrl.findSelectedProximityFirst, auth.validatePublicAccess);


deviceApp.get('/selected/proximity/second', deviceCtrl.findSelectedProximitySecond, auth.validatePublicAccess);


deviceApp.get('/selected/proximity/third', deviceCtrl.findSelectedProximityThird, auth.validatePublicAccess);


deviceApp.get('/my/proximity', deviceCtrl.findMyProximity, auth.validatePublicAccess);


deviceApp.get('/my/proximity/zero', deviceCtrl.findMyProximityZero, auth.validatePublicAccess);


deviceApp.get('/my/proximity/first', deviceCtrl.findMyProximityFirst, auth.validatePublicAccess);


deviceApp.get('/my/proximity/second', deviceCtrl.findMyProximitySecond, auth.validatePublicAccess);


deviceApp.get('/my/proximity/third', deviceCtrl.findMyProximityThird, auth.validatePublicAccess);


deviceApp.get('/by/:userId/proximity', deviceCtrl.findByProximity, auth.validatePublicAccess);


deviceApp.get('/by/:userId/proximity/zero', deviceCtrl.findByProximityZero, auth.validatePublicAccess);


deviceApp.get('/by/:userId/proximity/first', deviceCtrl.findByProximityFirst, auth.validatePublicAccess);


deviceApp.get('/by/:userId/proximity/second', deviceCtrl.findByProximitySecond, auth.validatePublicAccess);


deviceApp.get('/by/:userId/proximity/third', deviceCtrl.findByProximityThird, auth.validatePublicAccess);


deviceApp.get('/:deviceId', deviceCtrl.find, auth.validatePublicAccess);


deviceApp.post('/', deviceCtrl.create, auth.validateEditorAccess);


deviceApp.put('/:deviceId', deviceCtrl.update, auth.validateEditorAccess);


deviceApp.delete('/:deviceId', deviceCtrl.delete, auth.validateEditorAccess);






module.exports = deviceApp;