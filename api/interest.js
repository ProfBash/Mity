/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var express = require('express');
var interestApp = express();
var interestCtrl = require('../controller/interest');

var auth = require('../auth');


interestApp.get('/', interestCtrl.findAll, auth.validateAdminAccess);


interestApp.get('/by/userId', interestCtrl.findByUserId, auth.validateAdminAccess);


interestApp.get('/by/userIds', interestCtrl.findByUserIds, auth.validateAdminAccess);


interestApp.get('/proximity', interestCtrl.findProximity, auth.validatePublicAccess);


interestApp.get('/proximity/zero', interestCtrl.findProximityZero, auth.validatePublicAccess);


interestApp.get('/proximity/first', interestCtrl.findProximityFirst, auth.validatePublicAccess);


interestApp.get('/proximity/second', interestCtrl.findProximitySecond, auth.validatePublicAccess);


interestApp.get('/proximity/third', interestCtrl.findProximityThird, auth.validatePublicAccess);


interestApp.get('/selected/proximity', interestCtrl.findSelectedProximity, auth.validatePublicAccess);


interestApp.get('/selected/proximity/zero', interestCtrl.findSelectedProximityZero, auth.validatePublicAccess);


interestApp.get('/selected/proximity/first', interestCtrl.findSelectedProximityFirst, auth.validatePublicAccess);


interestApp.get('/selected/proximity/second', interestCtrl.findSelectedProximitySecond, auth.validatePublicAccess);


interestApp.get('/selected/proximity/third', interestCtrl.findSelectedProximityThird, auth.validatePublicAccess);


interestApp.get('/my/proximity', interestCtrl.findMyProximity, auth.validatePublicAccess);


interestApp.get('/my/proximity/zero', interestCtrl.findMyProximityZero, auth.validatePublicAccess);


interestApp.get('/my/proximity/first', interestCtrl.findMyProximityFirst, auth.validatePublicAccess);


interestApp.get('/my/proximity/second', interestCtrl.findMyProximitySecond, auth.validatePublicAccess);


interestApp.get('/my/proximity/third', interestCtrl.findMyProximityThird, auth.validatePublicAccess);


interestApp.get('/by/:userId/proximity', interestCtrl.findByProximity, auth.validatePublicAccess);


interestApp.get('/by/:userId/proximity/zero', interestCtrl.findByProximityZero, auth.validatePublicAccess);


interestApp.get('/by/:userId/proximity/first', interestCtrl.findByProximityFirst, auth.validatePublicAccess);


interestApp.get('/by/:userId/proximity/second', interestCtrl.findByProximitySecond, auth.validatePublicAccess);


interestApp.get('/by/:userId/proximity/third', interestCtrl.findByProximityThird, auth.validatePublicAccess);


interestApp.get('/:interestId', interestCtrl.find, auth.validatePublicAccess);


interestApp.post('/', interestCtrl.create, auth.validateEditorAccess);


interestApp.put('/:interestId', interestCtrl.update, auth.validateEditorAccess);


interestApp.delete('/:interestId', interestCtrl.delete, auth.validateEditorAccess);






module.exports = interestApp;
