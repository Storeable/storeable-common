"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.selectListingStatuses = exports.listingStatuses = exports.ACTIVE = exports.INACTIVE = exports.DRAFT = void 0;

var _listingStatuses;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var DRAFT = 1;
exports.DRAFT = DRAFT;
var INACTIVE = 2;
exports.INACTIVE = INACTIVE;
var ACTIVE = 3;
exports.ACTIVE = ACTIVE;
var listingStatuses = (_listingStatuses = {}, _defineProperty(_listingStatuses, DRAFT, 'Draft'), _defineProperty(_listingStatuses, INACTIVE, 'Inactive'), _defineProperty(_listingStatuses, ACTIVE, 'Active'), _listingStatuses);
exports.listingStatuses = listingStatuses;
var selectListingStatuses = [{
  text: 'Draft',
  value: DRAFT
}, {
  text: 'Inactive',
  value: INACTIVE
}, {
  text: 'Active',
  value: ACTIVE
}];
exports.selectListingStatuses = selectListingStatuses;