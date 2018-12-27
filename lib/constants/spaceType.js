"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.selectSpaceTypes = exports.spaceTypes = exports.PARKING_OUTDOOR = exports.PARKING_INDOOR = exports.STORAGE_OUTDOOR = exports.STORAGE_INDOOR = void 0;

var _spaceTypes;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var STORAGE_INDOOR = 1;
exports.STORAGE_INDOOR = STORAGE_INDOOR;
var STORAGE_OUTDOOR = 2;
exports.STORAGE_OUTDOOR = STORAGE_OUTDOOR;
var PARKING_INDOOR = 3;
exports.PARKING_INDOOR = PARKING_INDOOR;
var PARKING_OUTDOOR = 4;
exports.PARKING_OUTDOOR = PARKING_OUTDOOR;
var spaceTypes = (_spaceTypes = {}, _defineProperty(_spaceTypes, STORAGE_INDOOR, 'Storage Indoor'), _defineProperty(_spaceTypes, STORAGE_OUTDOOR, 'Storage Outdoor'), _defineProperty(_spaceTypes, PARKING_INDOOR, 'Parking Indoor'), _defineProperty(_spaceTypes, PARKING_OUTDOOR, 'Parking Outdoor'), _spaceTypes);
exports.spaceTypes = spaceTypes;
var selectSpaceTypes = [{
  text: 'Storage Indoor',
  value: STORAGE_INDOOR
}, {
  text: 'Storage Outdoor',
  value: STORAGE_OUTDOOR
}, {
  text: 'Parking Indoor',
  value: PARKING_INDOOR
}, {
  text: 'Parking Outdoor',
  value: PARKING_OUTDOOR
}];
exports.selectSpaceTypes = selectSpaceTypes;