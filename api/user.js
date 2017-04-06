/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


var express = require('express');
var userApp = express();
var userCtrl = require('../controller/user');

var auth = require('../auth');


userApp.get('/', userCtrl.findAll, auth.validateAdminAccess);


userApp.get('/by/userId', userCtrl.findByUserId, auth.validateAdminAccess);


userApp.get('/by/userIds', userCtrl.findByUserIds, auth.validateAdminAccess);


userApp.get('/proximity', userCtrl.findProximity, auth.validatePublicAccess);


userApp.get('/proximity/zero', userCtrl.findProximityZero, auth.validatePublicAccess);


userApp.get('/proximity/first', userCtrl.findProximityFirst, auth.validatePublicAccess);


userApp.get('/proximity/second', userCtrl.findProximitySecond, auth.validatePublicAccess);


userApp.get('/proximity/third', userCtrl.findProximityThird, auth.validatePublicAccess);


userApp.get('/selected/proximity', userCtrl.findSelectedProximity, auth.validatePublicAccess);


userApp.get('/selected/proximity/zero', userCtrl.findSelectedProximityZero, auth.validatePublicAccess);


userApp.get('/selected/proximity/first', userCtrl.findSelectedProximityFirst, auth.validatePublicAccess);


userApp.get('/selected/proximity/second', userCtrl.findSelectedProximitySecond, auth.validatePublicAccess);


userApp.get('/selected/proximity/third', userCtrl.findSelectedProximityThird, auth.validatePublicAccess);


userApp.get('/my/proximity', userCtrl.findMyProximity, auth.validatePublicAccess);


userApp.get('/my/proximity/zero', userCtrl.findMyProximityZero, auth.validatePublicAccess);


userApp.get('/my/proximity/first', userCtrl.findMyProximityFirst, auth.validatePublicAccess);


userApp.get('/my/proximity/second', userCtrl.findMyProximitySecond, auth.validatePublicAccess);


userApp.get('/my/proximity/third', userCtrl.findMyProximityThird, auth.validatePublicAccess);


userApp.get('/by/:userId/proximity', userCtrl.findByProximity, auth.validatePublicAccess);


userApp.get('/by/:userId/proximity/zero', userCtrl.findByProximityZero, auth.validatePublicAccess);


userApp.get('/by/:userId/proximity/first', userCtrl.findByProximityFirst, auth.validatePublicAccess);


userApp.get('/by/:userId/proximity/second', userCtrl.findByProximitySecond, auth.validatePublicAccess);


userApp.get('/by/:userId/proximity/third', userCtrl.findByProximityThird, auth.validatePublicAccess);


userApp.get('/:userId', userCtrl.find, auth.validatePublicAccess);


userApp.post('/', userCtrl.create, auth.validateEditorAccess);


userApp.put('/:userId', userCtrl.update, auth.validateEditorAccess);


userApp.delete('/:userId', userCtrl.delete, auth.validateEditorAccess);






module.exports = userApp;