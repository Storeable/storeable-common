'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _userTypes;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var ADMIN = exports.ADMIN = 1;
var CUSTOMER = exports.CUSTOMER = 2;

var userTypes = exports.userTypes = (_userTypes = {}, _defineProperty(_userTypes, ADMIN, 'Admin'), _defineProperty(_userTypes, CUSTOMER, 'Customer'), _userTypes);

var selectUserTypes = exports.selectUserTypes = [{ text: 'Admin', value: ADMIN }, { text: 'Customer', value: CUSTOMER }];