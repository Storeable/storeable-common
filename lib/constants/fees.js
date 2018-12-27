"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.fees = exports.INSURANCE = exports.LISTING_FEE = void 0;

var _fees;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var LISTING_FEE = 1;
exports.LISTING_FEE = LISTING_FEE;
var INSURANCE = 2;
exports.INSURANCE = INSURANCE;
var fees = (_fees = {}, _defineProperty(_fees, LISTING_FEE, {
  id: LISTING_FEE,
  name: 'Listing Fee',
  price: 15
}), _defineProperty(_fees, INSURANCE, {
  id: INSURANCE,
  name: 'Insurance',
  price: 5
}), _fees);
exports.fees = fees;