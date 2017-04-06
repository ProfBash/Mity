/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


var express = require('express');
var developerApp = express();
var developerCtrl = require('../controller/developer');

var auth = require('../auth');


developerApp.get('/', developerCtrl.findAll, auth.validateAdminAccess);


developerApp.get('/by/userId', developerCtrl.findByUserId, auth.validateAdminAccess);


developerApp.get('/by/userIds', developerCtrl.findByUserIds, auth.validateAdminAccess);


developerApp.get('/proximity', developerCtrl.findProximity, auth.validatePublicAccess);


developerApp.get('/proximity/zero', developerCtrl.findProximityZero, auth.validatePublicAccess);


developerApp.get('/proximity/first', developerCtrl.findProximityFirst, auth.validatePublicAccess);


developerApp.get('/proximity/second', developerCtrl.findProximitySecond, auth.validatePublicAccess);


developerApp.get('/proximity/third', developerCtrl.findProximityThird, auth.validatePublicAccess);


developerApp.get('/selected/proximity', developerCtrl.findSelectedProximity, auth.validatePublicAccess);


developerApp.get('/selected/proximity/zero', developerCtrl.findSelectedProximityZero, auth.validatePublicAccess);


developerApp.get('/selected/proximity/first', developerCtrl.findSelectedProximityFirst, auth.validatePublicAccess);


developerApp.get('/selected/proximity/second', developerCtrl.findSelectedProximitySecond, auth.validatePublicAccess);


developerApp.get('/selected/proximity/third', developerCtrl.findSelectedProximityThird, auth.validatePublicAccess);


developerApp.get('/my/proximity', developerCtrl.findMyProximity, auth.validatePublicAccess);


developerApp.get('/my/proximity/zero', developerCtrl.findMyProximityZero, auth.validatePublicAccess);


developerApp.get('/my/proximity/first', developerCtrl.findMyProximityFirst, auth.validatePublicAccess);


developerApp.get('/my/proximity/second', developerCtrl.findMyProximitySecond, auth.validatePublicAccess);


developerApp.get('/my/proximity/third', developerCtrl.findMyProximityThird, auth.validatePublicAccess);


developerApp.get('/by/:userId/proximity', developerCtrl.findByProximity, auth.validatePublicAccess);


developerApp.get('/by/:userId/proximity/zero', developerCtrl.findByProximityZero, auth.validatePublicAccess);


developerApp.get('/by/:userId/proximity/first', developerCtrl.findByProximityFirst, auth.validatePublicAccess);


developerApp.get('/by/:userId/proximity/second', developerCtrl.findByProximitySecond, auth.validatePublicAccess);


developerApp.get('/by/:userId/proximity/third', developerCtrl.findByProximityThird, auth.validatePublicAccess);


developerApp.get('/:developerId', developerCtrl.find, auth.validatePublicAccess);


developerApp.post('/', developerCtrl.create, auth.validateEditorAccess);


developerApp.put('/:developerId', developerCtrl.update, auth.validateEditorAccess);


developerApp.delete('/:developerId', developerCtrl.delete, auth.validateEditorAccess);






module.exports = developerApp;