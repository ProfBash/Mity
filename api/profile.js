/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


var express = require('express');
var profileApp = express();
var profileCtrl = require('../controller/profile');

var auth = require('../auth');


profileApp.get('/', profileCtrl.findAll, auth.validateAdminAccess);


profileApp.get('/by/userId', profileCtrl.findByUserId, auth.validateAdminAccess);


profileApp.get('/by/userIds', profileCtrl.findByUserIds, auth.validateAdminAccess);


profileApp.get('/proximity', profileCtrl.findProximity, auth.validatePublicAccess);


profileApp.get('/proximity/zero', profileCtrl.findProximityZero, auth.validatePublicAccess);


profileApp.get('/proximity/first', profileCtrl.findProximityFirst, auth.validatePublicAccess);


profileApp.get('/proximity/second', profileCtrl.findProximitySecond, auth.validatePublicAccess);


profileApp.get('/proximity/third', profileCtrl.findProximityThird, auth.validatePublicAccess);


profileApp.get('/selected/proximity', profileCtrl.findSelectedProximity, auth.validatePublicAccess);


profileApp.get('/selected/proximity/zero', profileCtrl.findSelectedProximityZero, auth.validatePublicAccess);


profileApp.get('/selected/proximity/first', profileCtrl.findSelectedProximityFirst, auth.validatePublicAccess);


profileApp.get('/selected/proximity/second', profileCtrl.findSelectedProximitySecond, auth.validatePublicAccess);


profileApp.get('/selected/proximity/third', profileCtrl.findSelectedProximityThird, auth.validatePublicAccess);


profileApp.get('/my/proximity', profileCtrl.findMyProximity, auth.validatePublicAccess);


profileApp.get('/my/proximity/zero', profileCtrl.findMyProximityZero, auth.validatePublicAccess);


profileApp.get('/my/proximity/first', profileCtrl.findMyProximityFirst, auth.validatePublicAccess);


profileApp.get('/my/proximity/second', profileCtrl.findMyProximitySecond, auth.validatePublicAccess);


profileApp.get('/my/proximity/third', profileCtrl.findMyProximityThird, auth.validatePublicAccess);


profileApp.get('/by/:userId/proximity', profileCtrl.findByProximity, auth.validatePublicAccess);


profileApp.get('/by/:userId/proximity/zero', profileCtrl.findByProximityZero, auth.validatePublicAccess);


profileApp.get('/by/:userId/proximity/first', profileCtrl.findByProximityFirst, auth.validatePublicAccess);


profileApp.get('/by/:userId/proximity/second', profileCtrl.findByProximitySecond, auth.validatePublicAccess);


profileApp.get('/by/:userId/proximity/third', profileCtrl.findByProximityThird, auth.validatePublicAccess);


profileApp.get('/:profileId', profileCtrl.find, auth.validatePublicAccess);


profileApp.post('/', profileCtrl.create, auth.validateEditorAccess);


profileApp.put('/:profileId', profileCtrl.update, auth.validateEditorAccess);


profileApp.delete('/:profileId', profileCtrl.delete, auth.validateEditorAccess);






module.exports = profileApp;