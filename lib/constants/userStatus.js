'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _userStatuses;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var INACTIVE = exports.INACTIVE = 1;
var ACTIVE = exports.ACTIVE = 2;
var SUSPENDED = exports.SUSPENDED = 3;

var userStatuses = exports.userStatuses = (_userStatuses = {}, _defineProperty(_userStatuses, INACTIVE, 'Inactive'), _defineProperty(_userStatuses, ACTIVE, 'Active'), _defineProperty(_userStatuses, SUSPENDED, 'Suspended'), _userStatuses);

var selectUserStatuses = exports.selectUserStatuses = [{ text: 'Inactive', value: INACTIVE }, { text: 'Active', value: ACTIVE }, { text: 'Suspended', value: SUSPENDED }];