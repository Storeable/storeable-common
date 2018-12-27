"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.selectUserTypes = exports.userTypes = exports.CUSTOMER = exports.ADMIN = void 0;

var _userTypes;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var ADMIN = 1;
exports.ADMIN = ADMIN;
var CUSTOMER = 2;
exports.CUSTOMER = CUSTOMER;
var userTypes = (_userTypes = {}, _defineProperty(_userTypes, ADMIN, 'Admin'), _defineProperty(_userTypes, CUSTOMER, 'Customer'), _userTypes);
exports.userTypes = userTypes;
var selectUserTypes = [{
  text: 'Admin',
  value: ADMIN
}, {
  text: 'Customer',
  value: CUSTOMER
}];
exports.selectUserTypes = selectUserTypes;