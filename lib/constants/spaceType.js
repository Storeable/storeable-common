'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _spaceTypes;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var STORAGE_INDOOR = exports.STORAGE_INDOOR = 1;
var STORAGE_OUTDOOR = exports.STORAGE_OUTDOOR = 2;
var PARKING_INDOOR = exports.PARKING_INDOOR = 3;
var PARKING_OUTDOOR = exports.PARKING_OUTDOOR = 4;

var spaceTypes = exports.spaceTypes = (_spaceTypes = {}, _defineProperty(_spaceTypes, STORAGE_INDOOR, 'Storage Indoor'), _defineProperty(_spaceTypes, STORAGE_OUTDOOR, 'Storage Outdoor'), _defineProperty(_spaceTypes, PARKING_INDOOR, 'Parking Indoor'), _defineProperty(_spaceTypes, PARKING_OUTDOOR, 'Parking Outdoor'), _spaceTypes);

var selectSpaceTypes = exports.selectSpaceTypes = [{ text: 'Storage Indoor', value: STORAGE_INDOOR }, { text: 'Storage Outdoor', value: STORAGE_OUTDOOR }, { text: 'Parking Indoor', value: PARKING_INDOOR }, { text: 'Parking Outdoor', value: PARKING_OUTDOOR }];