/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var express = require('express');
var logApp = express();
var logCtrl = require('../controller/log');

var auth = require('../auth');


logApp.get('/', logCtrl.findAll, auth.validateAdminAccess);


logApp.get('/by/userId', logCtrl.findByUserId, auth.validateAdminAccess);


logApp.get('/by/userIds', logCtrl.findByUserIds, auth.validateAdminAccess);


logApp.get('/proximity', logCtrl.findProximity, auth.validatePublicAccess);


logApp.get('/proximity/zero', logCtrl.findProximityZero, auth.validatePublicAccess);


logApp.get('/proximity/first', logCtrl.findProximityFirst, auth.validatePublicAccess);


logApp.get('/proximity/second', logCtrl.findProximitySecond, auth.validatePublicAccess);


logApp.get('/proximity/third', logCtrl.findProximityThird, auth.validatePublicAccess);


logApp.get('/selected/proximity', logCtrl.findSelectedProximity, auth.validatePublicAccess);


logApp.get('/selected/proximity/zero', logCtrl.findSelectedProximityZero, auth.validatePublicAccess);


logApp.get('/selected/proximity/first', logCtrl.findSelectedProximityFirst, auth.validatePublicAccess);


logApp.get('/selected/proximity/second', logCtrl.findSelectedProximitySecond, auth.validatePublicAccess);


logApp.get('/selected/proximity/third', logCtrl.findSelectedProximityThird, auth.validatePublicAccess);


logApp.get('/my/proximity', logCtrl.findMyProximity, auth.validatePublicAccess);


logApp.get('/my/proximity/zero', logCtrl.findMyProximityZero, auth.validatePublicAccess);


logApp.get('/my/proximity/first', logCtrl.findMyProximityFirst, auth.validatePublicAccess);


logApp.get('/my/proximity/second', logCtrl.findMyProximitySecond, auth.validatePublicAccess);


logApp.get('/my/proximity/third', logCtrl.findMyProximityThird, auth.validatePublicAccess);


logApp.get('/by/:userId/proximity', logCtrl.findByProximity, auth.validatePublicAccess);


logApp.get('/by/:userId/proximity/zero', logCtrl.findByProximityZero, auth.validatePublicAccess);


logApp.get('/by/:userId/proximity/first', logCtrl.findByProximityFirst, auth.validatePublicAccess);


logApp.get('/by/:userId/proximity/second', logCtrl.findByProximitySecond, auth.validatePublicAccess);


logApp.get('/by/:userId/proximity/third', logCtrl.findByProximityThird, auth.validatePublicAccess);


logApp.get('/:logId', logCtrl.find, auth.validatePublicAccess);


logApp.post('/', logCtrl.create, auth.validateEditorAccess);


logApp.put('/:logId', logCtrl.update, auth.validateEditorAccess);


logApp.delete('/:logId', logCtrl.delete, auth.validateEditorAccess);






module.exports = logApp;

