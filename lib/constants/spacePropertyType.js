"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.selectSpacePropertyTypes = exports.spacePropertyTypes = exports.APARTMENT = exports.CONDO = exports.HOME = void 0;

var _spacePropertyTypes;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var HOME = 1;
exports.HOME = HOME;
var CONDO = 2;
exports.CONDO = CONDO;
var APARTMENT = 3;
exports.APARTMENT = APARTMENT;
var spacePropertyTypes = (_spacePropertyTypes = {}, _defineProperty(_spacePropertyTypes, HOME, 'Home'), _defineProperty(_spacePropertyTypes, CONDO, 'Condo'), _defineProperty(_spacePropertyTypes, APARTMENT, 'Apartment'), _spacePropertyTypes);
exports.spacePropertyTypes = spacePropertyTypes;
var selectSpacePropertyTypes = [{
  text: 'Home',
  value: HOME
}, {
  text: 'Condo',
  value: CONDO
}, {
  text: 'Apartment',
  value: APARTMENT
}];
exports.selectSpacePropertyTypes = selectSpacePropertyTypes;