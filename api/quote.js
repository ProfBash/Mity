/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


var express = require('express');
var quoteApp = express();
var quoteCtrl = require('../controller/quote');

var auth = require('../auth');


quoteApp.get('/', quoteCtrl.findAll, auth.validateAdminAccess);


quoteApp.get('/by/userId', quoteCtrl.findByUserId, auth.validateAdminAccess);


quoteApp.get('/by/userIds', quoteCtrl.findByUserIds, auth.validateAdminAccess);


quoteApp.get('/proximity', quoteCtrl.findProximity, auth.validatePublicAccess);


quoteApp.get('/proximity/zero', quoteCtrl.findProximityZero, auth.validatePublicAccess);


quoteApp.get('/proximity/first', quoteCtrl.findProximityFirst, auth.validatePublicAccess);


quoteApp.get('/proximity/second', quoteCtrl.findProximitySecond, auth.validatePublicAccess);


quoteApp.get('/proximity/third', quoteCtrl.findProximityThird, auth.validatePublicAccess);


quoteApp.get('/selected/proximity', quoteCtrl.findSelectedProximity, auth.validatePublicAccess);


quoteApp.get('/selected/proximity/zero', quoteCtrl.findSelectedProximityZero, auth.validatePublicAccess);


quoteApp.get('/selected/proximity/first', quoteCtrl.findSelectedProximityFirst, auth.validatePublicAccess);


quoteApp.get('/selected/proximity/second', quoteCtrl.findSelectedProximitySecond, auth.validatePublicAccess);


quoteApp.get('/selected/proximity/third', quoteCtrl.findSelectedProximityThird, auth.validatePublicAccess);


quoteApp.get('/my/proximity', quoteCtrl.findMyProximity, auth.validatePublicAccess);


quoteApp.get('/my/proximity/zero', quoteCtrl.findMyProximityZero, auth.validatePublicAccess);


quoteApp.get('/my/proximity/first', quoteCtrl.findMyProximityFirst, auth.validatePublicAccess);


quoteApp.get('/my/proximity/second', quoteCtrl.findMyProximitySecond, auth.validatePublicAccess);


quoteApp.get('/my/proximity/third', quoteCtrl.findMyProximityThird, auth.validatePublicAccess);


quoteApp.get('/by/:userId/proximity', quoteCtrl.findByProximity, auth.validatePublicAccess);


quoteApp.get('/by/:userId/proximity/zero', quoteCtrl.findByProximityZero, auth.validatePublicAccess);


quoteApp.get('/by/:userId/proximity/first', quoteCtrl.findByProximityFirst, auth.validatePublicAccess);


quoteApp.get('/by/:userId/proximity/second', quoteCtrl.findByProximitySecond, auth.validatePublicAccess);


quoteApp.get('/by/:userId/proximity/third', quoteCtrl.findByProximityThird, auth.validatePublicAccess);


quoteApp.get('/:quoteId', quoteCtrl.find, auth.validatePublicAccess);


quoteApp.post('/', quoteCtrl.create, auth.validateEditorAccess);


quoteApp.put('/:quoteId', quoteCtrl.update, auth.validateEditorAccess);


quoteApp.delete('/:quoteId', quoteCtrl.delete, auth.validateEditorAccess);






module.exports = quoteApp;