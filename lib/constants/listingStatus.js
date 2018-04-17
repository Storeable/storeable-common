'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var DRAFT = exports.DRAFT = 1;
var INACTIVE = exports.INACTIVE = 2;
var ACTIVE = exports.ACTIVE = 3;

var listingStatuses = exports.listingStatuses = {
  1: 'Draft',
  2: 'Inactive',
  3: 'Active'
};

var selectListingStatuses = exports.selectListingStatuses = [{ text: 'Draft', value: 1 }, { text: 'Inactive', value: 2 }, { text: 'Active', value: 3 }];