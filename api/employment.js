/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


var express = require('express');
var employmentApp = express();
var employmentCtrl = require('../controller/employment');

var auth = require('../auth');


employmentApp.get('/', employmentCtrl.findAll, auth.validateAdminAccess);


employmentApp.get('/by/userId', employmentCtrl.findByUserId, auth.validateAdminAccess);


employmentApp.get('/by/userIds', employmentCtrl.findByUserIds, auth.validateAdminAccess);


employmentApp.get('/proximity', employmentCtrl.findProximity, auth.validatePublicAccess);


employmentApp.get('/proximity/zero', employmentCtrl.findProximityZero, auth.validatePublicAccess);


employmentApp.get('/proximity/first', employmentCtrl.findProximityFirst, auth.validatePublicAccess);


employmentApp.get('/proximity/second', employmentCtrl.findProximitySecond, auth.validatePublicAccess);


employmentApp.get('/proximity/third', employmentCtrl.findProximityThird, auth.validatePublicAccess);


employmentApp.get('/selected/proximity', employmentCtrl.findSelectedProximity, auth.validatePublicAccess);


employmentApp.get('/selected/proximity/zero', employmentCtrl.findSelectedProximityZero, auth.validatePublicAccess);


employmentApp.get('/selected/proximity/first', employmentCtrl.findSelectedProximityFirst, auth.validatePublicAccess);


employmentApp.get('/selected/proximity/second', employmentCtrl.findSelectedProximitySecond, auth.validatePublicAccess);


employmentApp.get('/selected/proximity/third', employmentCtrl.findSelectedProximityThird, auth.validatePublicAccess);


employmentApp.get('/my/proximity', employmentCtrl.findMyProximity, auth.validatePublicAccess);


employmentApp.get('/my/proximity/zero', employmentCtrl.findMyProximityZero, auth.validatePublicAccess);


employmentApp.get('/my/proximity/first', employmentCtrl.findMyProximityFirst, auth.validatePublicAccess);


employmentApp.get('/my/proximity/second', employmentCtrl.findMyProximitySecond, auth.validatePublicAccess);


employmentApp.get('/my/proximity/third', employmentCtrl.findMyProximityThird, auth.validatePublicAccess);


employmentApp.get('/by/:userId/proximity', employmentCtrl.findByProximity, auth.validatePublicAccess);


employmentApp.get('/by/:userId/proximity/zero', employmentCtrl.findByProximityZero, auth.validatePublicAccess);


employmentApp.get('/by/:userId/proximity/first', employmentCtrl.findByProximityFirst, auth.validatePublicAccess);


employmentApp.get('/by/:userId/proximity/second', employmentCtrl.findByProximitySecond, auth.validatePublicAccess);


employmentApp.get('/by/:userId/proximity/third', employmentCtrl.findByProximityThird, auth.validatePublicAccess);


employmentApp.get('/:employmentId', employmentCtrl.find, auth.validatePublicAccess);


employmentApp.post('/', employmentCtrl.create, auth.validateEditorAccess);


employmentApp.put('/:employmentId', employmentCtrl.update, auth.validateEditorAccess);


employmentApp.delete('/:employmentId', employmentCtrl.delete, auth.validateEditorAccess);






module.exports = employmentApp;