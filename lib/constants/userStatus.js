"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.selectUserStatuses = exports.userStatuses = exports.SUSPENDED = exports.ACTIVE = exports.INACTIVE = void 0;

var _userStatuses;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var INACTIVE = 1;
exports.INACTIVE = INACTIVE;
var ACTIVE = 2;
exports.ACTIVE = ACTIVE;
var SUSPENDED = 3;
exports.SUSPENDED = SUSPENDED;
var userStatuses = (_userStatuses = {}, _defineProperty(_userStatuses, INACTIVE, 'Inactive'), _defineProperty(_userStatuses, ACTIVE, 'Active'), _defineProperty(_userStatuses, SUSPENDED, 'Suspended'), _userStatuses);
exports.userStatuses = userStatuses;
var selectUserStatuses = [{
  text: 'Inactive',
  value: INACTIVE
}, {
  text: 'Active',
  value: ACTIVE
}, {
  text: 'Suspended',
  value: SUSPENDED
}];
exports.selectUserStatuses = selectUserStatuses;