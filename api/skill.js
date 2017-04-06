/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


var express = require('express');
var skillApp = express();
var skillCtrl = require('../controller/skill');

var auth = require('../auth');


skillApp.get('/', skillCtrl.findAll, auth.validateAdminAccess);


skillApp.get('/by/userId', skillCtrl.findByUserId, auth.validateAdminAccess);


skillApp.get('/by/userIds', skillCtrl.findByUserIds, auth.validateAdminAccess);


skillApp.get('/proximity', skillCtrl.findProximity, auth.validatePublicAccess);


skillApp.get('/proximity/zero', skillCtrl.findProximityZero, auth.validatePublicAccess);


skillApp.get('/proximity/first', skillCtrl.findProximityFirst, auth.validatePublicAccess);


skillApp.get('/proximity/second', skillCtrl.findProximitySecond, auth.validatePublicAccess);


skillApp.get('/proximity/third', skillCtrl.findProximityThird, auth.validatePublicAccess);


skillApp.get('/selected/proximity', skillCtrl.findSelectedProximity, auth.validatePublicAccess);


skillApp.get('/selected/proximity/zero', skillCtrl.findSelectedProximityZero, auth.validatePublicAccess);


skillApp.get('/selected/proximity/first', skillCtrl.findSelectedProximityFirst, auth.validatePublicAccess);


skillApp.get('/selected/proximity/second', skillCtrl.findSelectedProximitySecond, auth.validatePublicAccess);


skillApp.get('/selected/proximity/third', skillCtrl.findSelectedProximityThird, auth.validatePublicAccess);


skillApp.get('/my/proximity', skillCtrl.findMyProximity, auth.validatePublicAccess);


skillApp.get('/my/proximity/zero', skillCtrl.findMyProximityZero, auth.validatePublicAccess);


skillApp.get('/my/proximity/first', skillCtrl.findMyProximityFirst, auth.validatePublicAccess);


skillApp.get('/my/proximity/second', skillCtrl.findMyProximitySecond, auth.validatePublicAccess);


skillApp.get('/my/proximity/third', skillCtrl.findMyProximityThird, auth.validatePublicAccess);


skillApp.get('/by/:userId/proximity', skillCtrl.findByProximity, auth.validatePublicAccess);


skillApp.get('/by/:userId/proximity/zero', skillCtrl.findByProximityZero, auth.validatePublicAccess);


skillApp.get('/by/:userId/proximity/first', skillCtrl.findByProximityFirst, auth.validatePublicAccess);


skillApp.get('/by/:userId/proximity/second', skillCtrl.findByProximitySecond, auth.validatePublicAccess);


skillApp.get('/by/:userId/proximity/third', skillCtrl.findByProximityThird, auth.validatePublicAccess);


skillApp.get('/:skillId', skillCtrl.find, auth.validatePublicAccess);


skillApp.post('/', skillCtrl.create, auth.validateEditorAccess);


skillApp.put('/:skillId', skillCtrl.update, auth.validateEditorAccess);


skillApp.delete('/:skillId', skillCtrl.delete, auth.validateEditorAccess);






module.exports = skillApp;