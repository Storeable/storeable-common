'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _spaceFeatureTypes;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var ACCESS = exports.ACCESS = 1;
var CLIMATE_CONTROLS = exports.CLIMATE_CONTROLS = 2;
var SECURITY = exports.SECURITY = 3;
var INSURANCE = exports.INSURANCE = 4;

var spaceFeatureTypes = exports.spaceFeatureTypes = (_spaceFeatureTypes = {}, _defineProperty(_spaceFeatureTypes, ACCESS, 'Access'), _defineProperty(_spaceFeatureTypes, CLIMATE_CONTROLS, 'Climate Controls'), _defineProperty(_spaceFeatureTypes, SECURITY, 'Security'), _defineProperty(_spaceFeatureTypes, INSURANCE, 'Insurance'), _spaceFeatureTypes);

var selectSpaceFeatureTypes = exports.selectSpaceFeatureTypes = [{ text: 'Access', value: ACCESS }, { text: 'Climate Controls', value: CLIMATE_CONTROLS }, { text: 'Security', value: SECURITY }, { text: 'Insurance', value: INSURANCE }];