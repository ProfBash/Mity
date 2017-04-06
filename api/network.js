/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


var express = require('express');
var networkApp = express();
var networkCtrl = require('../controller/network');

var auth = require('../auth');


networkApp.get('/', networkCtrl.findAll, auth.validateAdminAccess);


networkApp.get('/by/userId', networkCtrl.findByUserId, auth.validateAdminAccess);


networkApp.get('/by/userIds', networkCtrl.findByUserIds, auth.validateAdminAccess);


networkApp.get('/proximity', networkCtrl.findProximity, auth.validatePublicAccess);


networkApp.get('/proximity/zero', networkCtrl.findProximityZero, auth.validatePublicAccess);


networkApp.get('/proximity/first', networkCtrl.findProximityFirst, auth.validatePublicAccess);


networkApp.get('/proximity/second', networkCtrl.findProximitySecond, auth.validatePublicAccess);


networkApp.get('/proximity/third', networkCtrl.findProximityThird, auth.validatePublicAccess);


networkApp.get('/selected/proximity', networkCtrl.findSelectedProximity, auth.validatePublicAccess);


networkApp.get('/selected/proximity/zero', networkCtrl.findSelectedProximityZero, auth.validatePublicAccess);


networkApp.get('/selected/proximity/first', networkCtrl.findSelectedProximityFirst, auth.validatePublicAccess);


networkApp.get('/selected/proximity/second', networkCtrl.findSelectedProximitySecond, auth.validatePublicAccess);


networkApp.get('/selected/proximity/third', networkCtrl.findSelectedProximityThird, auth.validatePublicAccess);


networkApp.get('/my/proximity', networkCtrl.findMyProximity, auth.validatePublicAccess);


networkApp.get('/my/proximity/zero', networkCtrl.findMyProximityZero, auth.validatePublicAccess);


networkApp.get('/my/proximity/first', networkCtrl.findMyProximityFirst, auth.validatePublicAccess);


networkApp.get('/my/proximity/second', networkCtrl.findMyProximitySecond, auth.validatePublicAccess);


networkApp.get('/my/proximity/third', networkCtrl.findMyProximityThird, auth.validatePublicAccess);


networkApp.get('/by/:userId/proximity', networkCtrl.findByProximity, auth.validatePublicAccess);


networkApp.get('/by/:userId/proximity/zero', networkCtrl.findByProximityZero, auth.validatePublicAccess);


networkApp.get('/by/:userId/proximity/first', networkCtrl.findByProximityFirst, auth.validatePublicAccess);


networkApp.get('/by/:userId/proximity/second', networkCtrl.findByProximitySecond, auth.validatePublicAccess);


networkApp.get('/by/:userId/proximity/third', networkCtrl.findByProximityThird, auth.validatePublicAccess);


networkApp.get('/:networkId', networkCtrl.find, auth.validatePublicAccess);


networkApp.post('/', networkCtrl.create, auth.validateEditorAccess);


networkApp.put('/:networkId', networkCtrl.update, auth.validateEditorAccess);


networkApp.delete('/:networkId', networkCtrl.delete, auth.validateEditorAccess);






module.exports = networkApp;