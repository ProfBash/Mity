/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


var express = require('express');
var orderApp = express();
var orderCtrl = require('../controller/order');

var auth = require('../auth');


orderApp.get('/', orderCtrl.findAll, auth.validateAdminAccess);


orderApp.get('/by/userId', orderCtrl.findByUserId, auth.validateAdminAccess);


orderApp.get('/by/userIds', orderCtrl.findByUserIds, auth.validateAdminAccess);


orderApp.get('/proximity', orderCtrl.findProximity, auth.validatePublicAccess);


orderApp.get('/proximity/zero', orderCtrl.findProximityZero, auth.validatePublicAccess);


orderApp.get('/proximity/first', orderCtrl.findProximityFirst, auth.validatePublicAccess);


orderApp.get('/proximity/second', orderCtrl.findProximitySecond, auth.validatePublicAccess);


orderApp.get('/proximity/third', orderCtrl.findProximityThird, auth.validatePublicAccess);


orderApp.get('/selected/proximity', orderCtrl.findSelectedProximity, auth.validatePublicAccess);


orderApp.get('/selected/proximity/zero', orderCtrl.findSelectedProximityZero, auth.validatePublicAccess);


orderApp.get('/selected/proximity/first', orderCtrl.findSelectedProximityFirst, auth.validatePublicAccess);


orderApp.get('/selected/proximity/second', orderCtrl.findSelectedProximitySecond, auth.validatePublicAccess);


orderApp.get('/selected/proximity/third', orderCtrl.findSelectedProximityThird, auth.validatePublicAccess);


orderApp.get('/my/proximity', orderCtrl.findMyProximity, auth.validatePublicAccess);


orderApp.get('/my/proximity/zero', orderCtrl.findMyProximityZero, auth.validatePublicAccess);


orderApp.get('/my/proximity/first', orderCtrl.findMyProximityFirst, auth.validatePublicAccess);


orderApp.get('/my/proximity/second', orderCtrl.findMyProximitySecond, auth.validatePublicAccess);


orderApp.get('/my/proximity/third', orderCtrl.findMyProximityThird, auth.validatePublicAccess);


orderApp.get('/by/:userId/proximity', orderCtrl.findByProximity, auth.validatePublicAccess);


orderApp.get('/by/:userId/proximity/zero', orderCtrl.findByProximityZero, auth.validatePublicAccess);


orderApp.get('/by/:userId/proximity/first', orderCtrl.findByProximityFirst, auth.validatePublicAccess);


orderApp.get('/by/:userId/proximity/second', orderCtrl.findByProximitySecond, auth.validatePublicAccess);


orderApp.get('/by/:userId/proximity/third', orderCtrl.findByProximityThird, auth.validatePublicAccess);


orderApp.get('/:orderId', orderCtrl.find, auth.validatePublicAccess);


orderApp.post('/', orderCtrl.create, auth.validateEditorAccess);


orderApp.put('/:orderId', orderCtrl.update, auth.validateEditorAccess);


orderApp.delete('/:orderId', orderCtrl.delete, auth.validateEditorAccess);






module.exports = orderApp;