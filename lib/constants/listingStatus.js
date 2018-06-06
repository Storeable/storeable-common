'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _listingStatuses;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var DRAFT = exports.DRAFT = 1;
var INACTIVE = exports.INACTIVE = 2;
var ACTIVE = exports.ACTIVE = 3;

var listingStatuses = exports.listingStatuses = (_listingStatuses = {}, _defineProperty(_listingStatuses, DRAFT, 'Draft'), _defineProperty(_listingStatuses, INACTIVE, 'Inactive'), _defineProperty(_listingStatuses, ACTIVE, 'Active'), _listingStatuses);

var selectListingStatuses = exports.selectListingStatuses = [{ text: 'Draft', value: DRAFT }, { text: 'Inactive', value: INACTIVE }, { text: 'Active', value: ACTIVE }];