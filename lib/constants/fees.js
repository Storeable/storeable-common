'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _fees;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var LISTING_FEE = exports.LISTING_FEE = 1;
var INSURANCE = exports.INSURANCE = 2;

var fees = exports.fees = (_fees = {}, _defineProperty(_fees, LISTING_FEE, {
  id: LISTING_FEE,
  name: 'Listing Fee',
  price: 15
}), _defineProperty(_fees, INSURANCE, {
  id: INSURANCE,
  name: 'Insurance',
  price: 5
}), _fees);