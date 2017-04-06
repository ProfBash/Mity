/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var express = require('express');
var basicApp = express();
var basicCtrl = require('../controller/basic');

var auth = require('../auth');


basicApp.get('/', basicCtrl.findAll, auth.validateAdminAccess);


basicApp.get('/by/userId', basicCtrl.findByUserId, auth.validateAdminAccess);


basicApp.get('/by/userIds', basicCtrl.findByUserIds, auth.validateAdminAccess);


basicApp.get('/proximity', basicCtrl.findProximity, auth.validatePublicAccess);


basicApp.get('/proximity/zero', basicCtrl.findProximityZero, auth.validatePublicAccess);


basicApp.get('/proximity/first', basicCtrl.findProximityFirst, auth.validatePublicAccess);


basicApp.get('/proximity/second', basicCtrl.findProximitySecond, auth.validatePublicAccess);


basicApp.get('/proximity/third', basicCtrl.findProximityThird, auth.validatePublicAccess);


basicApp.get('/selected/proximity', basicCtrl.findSelectedProximity, auth.validatePublicAccess);


basicApp.get('/selected/proximity/zero', basicCtrl.findSelectedProximityZero, auth.validatePublicAccess);


basicApp.get('/selected/proximity/first', basicCtrl.findSelectedProximityFirst, auth.validatePublicAccess);


basicApp.get('/selected/proximity/second', basicCtrl.findSelectedProximitySecond, auth.validatePublicAccess);


basicApp.get('/selected/proximity/third', basicCtrl.findSelectedProximityThird, auth.validatePublicAccess);


basicApp.get('/my/proximity', basicCtrl.findMyProximity, auth.validatePublicAccess);


basicApp.get('/my/proximity/zero', basicCtrl.findMyProximityZero, auth.validatePublicAccess);


basicApp.get('/my/proximity/first', basicCtrl.findMyProximityFirst, auth.validatePublicAccess);


basicApp.get('/my/proximity/second', basicCtrl.findMyProximitySecond, auth.validatePublicAccess);


basicApp.get('/my/proximity/third', basicCtrl.findMyProximityThird, auth.validatePublicAccess);


basicApp.get('/by/:userId/proximity', basicCtrl.findByProximity, auth.validatePublicAccess);


basicApp.get('/by/:userId/proximity/zero', basicCtrl.findByProximityZero, auth.validatePublicAccess);


basicApp.get('/by/:userId/proximity/first', basicCtrl.findByProximityFirst, auth.validatePublicAccess);


basicApp.get('/by/:userId/proximity/second', basicCtrl.findByProximitySecond, auth.validatePublicAccess);


basicApp.get('/by/:userId/proximity/third', basicCtrl.findByProximityThird, auth.validatePublicAccess);


basicApp.get('/:basicId', basicCtrl.find, auth.validatePublicAccess);


basicApp.post('/', basicCtrl.create, auth.validateEditorAccess);


basicApp.put('/:basicId', basicCtrl.update, auth.validateEditorAccess);


basicApp.delete('/:basicId', basicCtrl.delete, auth.validateEditorAccess);






module.exports = basicApp;

