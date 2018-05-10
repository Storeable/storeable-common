'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var INACTIVE = exports.INACTIVE = 1;
var ACTIVE = exports.ACTIVE = 2;
var SUSPENDED = exports.SUSPENDED = 3;

var userStatuses = exports.userStatuses = {
  1: 'Inactive',
  2: 'Active',
  3: 'Suspended'
};

var selectUserStatuses = exports.selectUserStatuses = [{ text: 'Inactive', value: 1 }, { text: 'Active', value: 2 }, { text: 'Suspended', value: 3 }];