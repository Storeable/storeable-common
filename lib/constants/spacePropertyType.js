'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _spacePropertyTypes;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var HOME = exports.HOME = 1;
var CONDO = exports.CONDO = 2;
var APARTMENT = exports.APARTMENT = 3;

var spacePropertyTypes = exports.spacePropertyTypes = (_spacePropertyTypes = {}, _defineProperty(_spacePropertyTypes, HOME, 'Home'), _defineProperty(_spacePropertyTypes, CONDO, 'Condo'), _defineProperty(_spacePropertyTypes, APARTMENT, 'Apartment'), _spacePropertyTypes);

var selectSpacePropertyTypes = exports.selectSpacePropertyTypes = [{ text: 'Home', value: HOME }, { text: 'Condo', value: CONDO }, { text: 'Apartment', value: APARTMENT }];