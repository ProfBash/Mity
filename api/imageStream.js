/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var express = require('express');
var imageStreamApp = express();
var imageStreamCtrl = require('../controller/imageStream');

var auth = require('../auth');


imageStreamApp.get('/', imageStreamCtrl.findAll, auth.validateAdminAccess);


imageStreamApp.get('/by/userId', imageStreamCtrl.findByUserId, auth.validateAdminAccess);


imageStreamApp.get('/by/userIds', imageStreamCtrl.findByUserIds, auth.validateAdminAccess);


imageStreamApp.get('/proximity', imageStreamCtrl.findProximity, auth.validatePublicAccess);


imageStreamApp.get('/proximity/zero', imageStreamCtrl.findProximityZero, auth.validatePublicAccess);


imageStreamApp.get('/proximity/first', imageStreamCtrl.findProximityFirst, auth.validatePublicAccess);


imageStreamApp.get('/proximity/second', imageStreamCtrl.findProximitySecond, auth.validatePublicAccess);


imageStreamApp.get('/proximity/third', imageStreamCtrl.findProximityThird, auth.validatePublicAccess);


imageStreamApp.get('/selected/proximity', imageStreamCtrl.findSelectedProximity, auth.validatePublicAccess);


imageStreamApp.get('/selected/proximity/zero', imageStreamCtrl.findSelectedProximityZero, auth.validatePublicAccess);


imageStreamApp.get('/selected/proximity/first', imageStreamCtrl.findSelectedProximityFirst, auth.validatePublicAccess);


imageStreamApp.get('/selected/proximity/second', imageStreamCtrl.findSelectedProximitySecond, auth.validatePublicAccess);


imageStreamApp.get('/selected/proximity/third', imageStreamCtrl.findSelectedProximityThird, auth.validatePublicAccess);


imageStreamApp.get('/my/proximity', imageStreamCtrl.findMyProximity, auth.validatePublicAccess);


imageStreamApp.get('/my/proximity/zero', imageStreamCtrl.findMyProximityZero, auth.validatePublicAccess);


imageStreamApp.get('/my/proximity/first', imageStreamCtrl.findMyProximityFirst, auth.validatePublicAccess);


imageStreamApp.get('/my/proximity/second', imageStreamCtrl.findMyProximitySecond, auth.validatePublicAccess);


imageStreamApp.get('/my/proximity/third', imageStreamCtrl.findMyProximityThird, auth.validatePublicAccess);


imageStreamApp.get('/by/:userId/proximity', imageStreamCtrl.findByProximity, auth.validatePublicAccess);


imageStreamApp.get('/by/:userId/proximity/zero', imageStreamCtrl.findByProximityZero, auth.validatePublicAccess);


imageStreamApp.get('/by/:userId/proximity/first', imageStreamCtrl.findByProximityFirst, auth.validatePublicAccess);


imageStreamApp.get('/by/:userId/proximity/second', imageStreamCtrl.findByProximitySecond, auth.validatePublicAccess);


imageStreamApp.get('/by/:userId/proximity/third', imageStreamCtrl.findByProximityThird, auth.validatePublicAccess);


imageStreamApp.get('/:imageStreamId', imageStreamCtrl.find, auth.validatePublicAccess);


imageStreamApp.post('/', imageStreamCtrl.create, auth.validateEditorAccess);


imageStreamApp.put('/:imageStreamId', imageStreamCtrl.update, auth.validateEditorAccess);


imageStreamApp.delete('/:imageStreamId', imageStreamCtrl.delete, auth.validateEditorAccess);






module.exports = imageStreamApp;