/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


var express = require('express');
var educationApp = express();
var educationCtrl = require('../controller/education');

var auth = require('../auth');


educationApp.get('/', educationCtrl.findAll, auth.validateAdminAccess);


educationApp.get('/by/userId', educationCtrl.findByUserId, auth.validateAdminAccess);


educationApp.get('/by/userIds', educationCtrl.findByUserIds, auth.validateAdminAccess);


educationApp.get('/proximity', educationCtrl.findProximity, auth.validatePublicAccess);


educationApp.get('/proximity/zero', educationCtrl.findProximityZero, auth.validatePublicAccess);


educationApp.get('/proximity/first', educationCtrl.findProximityFirst, auth.validatePublicAccess);


educationApp.get('/proximity/second', educationCtrl.findProximitySecond, auth.validatePublicAccess);


educationApp.get('/proximity/third', educationCtrl.findProximityThird, auth.validatePublicAccess);


educationApp.get('/selected/proximity', educationCtrl.findSelectedProximity, auth.validatePublicAccess);


educationApp.get('/selected/proximity/zero', educationCtrl.findSelectedProximityZero, auth.validatePublicAccess);


educationApp.get('/selected/proximity/first', educationCtrl.findSelectedProximityFirst, auth.validatePublicAccess);


educationApp.get('/selected/proximity/second', educationCtrl.findSelectedProximitySecond, auth.validatePublicAccess);


educationApp.get('/selected/proximity/third', educationCtrl.findSelectedProximityThird, auth.validatePublicAccess);


educationApp.get('/my/proximity', educationCtrl.findMyProximity, auth.validatePublicAccess);


educationApp.get('/my/proximity/zero', educationCtrl.findMyProximityZero, auth.validatePublicAccess);


educationApp.get('/my/proximity/first', educationCtrl.findMyProximityFirst, auth.validatePublicAccess);


educationApp.get('/my/proximity/second', educationCtrl.findMyProximitySecond, auth.validatePublicAccess);


educationApp.get('/my/proximity/third', educationCtrl.findMyProximityThird, auth.validatePublicAccess);


educationApp.get('/by/:userId/proximity', educationCtrl.findByProximity, auth.validatePublicAccess);


educationApp.get('/by/:userId/proximity/zero', educationCtrl.findByProximityZero, auth.validatePublicAccess);


educationApp.get('/by/:userId/proximity/first', educationCtrl.findByProximityFirst, auth.validatePublicAccess);


educationApp.get('/by/:userId/proximity/second', educationCtrl.findByProximitySecond, auth.validatePublicAccess);


educationApp.get('/by/:userId/proximity/third', educationCtrl.findByProximityThird, auth.validatePublicAccess);


educationApp.get('/:educationId', educationCtrl.find, auth.validatePublicAccess);


educationApp.post('/', educationCtrl.create, auth.validateEditorAccess);


educationApp.put('/:educationId', educationCtrl.update, auth.validateEditorAccess);


educationApp.delete('/:educationId', educationCtrl.delete, auth.validateEditorAccess);






module.exports = educationApp;

