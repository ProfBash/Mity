/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var express = require('express');
var imageApp = express();
var imageCtrl = require('../controller/image');

var auth = require('../auth');


imageApp.get('/', imageCtrl.findAll, auth.validateAdminAccess);


imageApp.get('/by/userId', imageCtrl.findByUserId, auth.validateAdminAccess);


imageApp.get('/by/userIds', imageCtrl.findByUserIds, auth.validateAdminAccess);


imageApp.get('/proximity', imageCtrl.findProximity, auth.validatePublicAccess);


imageApp.get('/proximity/zero', imageCtrl.findProximityZero, auth.validatePublicAccess);


imageApp.get('/proximity/first', imageCtrl.findProximityFirst, auth.validatePublicAccess);


imageApp.get('/proximity/second', imageCtrl.findProximitySecond, auth.validatePublicAccess);


imageApp.get('/proximity/third', imageCtrl.findProximityThird, auth.validatePublicAccess);


imageApp.get('/selected/proximity', imageCtrl.findSelectedProximity, auth.validatePublicAccess);


imageApp.get('/selected/proximity/zero', imageCtrl.findSelectedProximityZero, auth.validatePublicAccess);


imageApp.get('/selected/proximity/first', imageCtrl.findSelectedProximityFirst, auth.validatePublicAccess);


imageApp.get('/selected/proximity/second', imageCtrl.findSelectedProximitySecond, auth.validatePublicAccess);


imageApp.get('/selected/proximity/third', imageCtrl.findSelectedProximityThird, auth.validatePublicAccess);


imageApp.get('/my/proximity', imageCtrl.findMyProximity, auth.validatePublicAccess);


imageApp.get('/my/proximity/zero', imageCtrl.findMyProximityZero, auth.validatePublicAccess);


imageApp.get('/my/proximity/first', imageCtrl.findMyProximityFirst, auth.validatePublicAccess);


imageApp.get('/my/proximity/second', imageCtrl.findMyProximitySecond, auth.validatePublicAccess);


imageApp.get('/my/proximity/third', imageCtrl.findMyProximityThird, auth.validatePublicAccess);


imageApp.get('/by/:userId/proximity', imageCtrl.findByProximity, auth.validatePublicAccess);


imageApp.get('/by/:userId/proximity/zero', imageCtrl.findByProximityZero, auth.validatePublicAccess);


imageApp.get('/by/:userId/proximity/first', imageCtrl.findByProximityFirst, auth.validatePublicAccess);


imageApp.get('/by/:userId/proximity/second', imageCtrl.findByProximitySecond, auth.validatePublicAccess);


imageApp.get('/by/:userId/proximity/third', imageCtrl.findByProximityThird, auth.validatePublicAccess);


imageApp.get('/:imageId', imageCtrl.find, auth.validatePublicAccess);


imageApp.post('/', imageCtrl.create, auth.validateEditorAccess);


imageApp.put('/:imageId', imageCtrl.update, auth.validateEditorAccess);


imageApp.delete('/:imageId', imageCtrl.delete, auth.validateEditorAccess);






module.exports = imageApp;









module.exports = imageApp;
