/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var express = require('express');
var notificationApp = express();
var notificationCtrl = require('../controller/notification');

var auth = require('../auth');


notificationApp.get('/', notificationCtrl.findAll, auth.validateAdminAccess);


notificationApp.get('/by/userId', notificationCtrl.findByUserId, auth.validateAdminAccess);


notificationApp.get('/by/userIds', notificationCtrl.findByUserIds, auth.validateAdminAccess);


notificationApp.get('/proximity', notificationCtrl.findProximity, auth.validatePublicAccess);


notificationApp.get('/proximity/zero', notificationCtrl.findProximityZero, auth.validatePublicAccess);


notificationApp.get('/proximity/first', notificationCtrl.findProximityFirst, auth.validatePublicAccess);


notificationApp.get('/proximity/second', notificationCtrl.findProximitySecond, auth.validatePublicAccess);


notificationApp.get('/proximity/third', notificationCtrl.findProximityThird, auth.validatePublicAccess);


notificationApp.get('/selected/proximity', notificationCtrl.findSelectedProximity, auth.validatePublicAccess);


notificationApp.get('/selected/proximity/zero', notificationCtrl.findSelectedProximityZero, auth.validatePublicAccess);


notificationApp.get('/selected/proximity/first', notificationCtrl.findSelectedProximityFirst, auth.validatePublicAccess);


notificationApp.get('/selected/proximity/second', notificationCtrl.findSelectedProximitySecond, auth.validatePublicAccess);


notificationApp.get('/selected/proximity/third', notificationCtrl.findSelectedProximityThird, auth.validatePublicAccess);


notificationApp.get('/my/proximity', notificationCtrl.findMyProximity, auth.validatePublicAccess);


notificationApp.get('/my/proximity/zero', notificationCtrl.findMyProximityZero, auth.validatePublicAccess);


notificationApp.get('/my/proximity/first', notificationCtrl.findMyProximityFirst, auth.validatePublicAccess);


notificationApp.get('/my/proximity/second', notificationCtrl.findMyProximitySecond, auth.validatePublicAccess);


notificationApp.get('/my/proximity/third', notificationCtrl.findMyProximityThird, auth.validatePublicAccess);


notificationApp.get('/by/:userId/proximity', notificationCtrl.findByProximity, auth.validatePublicAccess);


notificationApp.get('/by/:userId/proximity/zero', notificationCtrl.findByProximityZero, auth.validatePublicAccess);


notificationApp.get('/by/:userId/proximity/first', notificationCtrl.findByProximityFirst, auth.validatePublicAccess);


notificationApp.get('/by/:userId/proximity/second', notificationCtrl.findByProximitySecond, auth.validatePublicAccess);


notificationApp.get('/by/:userId/proximity/third', notificationCtrl.findByProximityThird, auth.validatePublicAccess);


notificationApp.get('/:notificationId', notificationCtrl.find, auth.validatePublicAccess);


notificationApp.post('/', notificationCtrl.create, auth.validateEditorAccess);


notificationApp.put('/:notificationId', notificationCtrl.update, auth.validateEditorAccess);


notificationApp.delete('/:notificationId', notificationCtrl.delete, auth.validateEditorAccess);






module.exports = notificationApp;